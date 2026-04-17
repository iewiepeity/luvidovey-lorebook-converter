// 卿卿我我 Lorebook 設定集轉換 - Service Worker
const CACHE_VERSION = 'lorebook-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/titi-logo.png'
];

// 安裝：預快取核心資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CORE_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// 啟用：清理舊版快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// 抓取策略：
// - 對 Gemini API / Google Fonts 等外部請求：永遠走網路
// - 對自家 HTML：優先網路，失敗時用快取（網路優先）
// - 對自家靜態資源（圖片/JS/CSS/manifest）：優先快取，背景更新（快取優先）
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只攔截同源請求，API 與第三方都繞過
  if (url.origin !== self.location.origin) return;

  // 只處理 GET
  if (request.method !== 'GET') return;

  // HTML 類：網路優先
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then(resp => {
          const respClone = resp.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, respClone));
          return resp;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // 其他靜態資源：快取優先
  event.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request).then(resp => {
        if (resp.ok) {
          const respClone = resp.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, respClone));
        }
        return resp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
