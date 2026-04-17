# 🌸 卿卿我我 Lorebook 轉換器

把你的世界觀長文，透過 AI 自動整理成**卿卿我我 App「設定集」**格式的 lorebook 條目。

> ✨ 不是單純的切段落工具——而是真正讀懂你的世界觀，萃取出人物、地點、組織、術語等**獨立概念**，並自動生成觸發關鍵字。

## 🔗 線上使用

👉 **[點這裡直接使用](https://iewiepeity.github.io/luvidovey-lorebook-converter/)**

無需安裝，打開瀏覽器就能用。你的 API key 只儲存在你自己的瀏覽器本機，不會上傳任何地方。

## ✨ 功能特色

- **✨ AI 智慧整理**：使用 Gemini 2.5 Flash 自動讀懂世界觀、萃取概念
- **📐 規則拆分**：不想用 AI 時的備用方案，支援 Markdown 標題、段落拆分
- **🏷️ 八大類別**：人物角色 / 地點場域 / 組織勢力 / 物品道具 / 專有名詞 / 事件時間線 / 文化風俗 / 能力體系
- **🔑 關鍵字自動生成**：包含正式名、簡稱、別名，覆蓋對話中可能的各種說法
- **📋 一鍵複製**：每條目獨立複製，逐項貼進 App 超方便
- **✂️ 字數即時校驗**：自動提醒是否超過 App 限制（標題 50 字、內容 2000 字、關鍵字 10 個）
- **🎨 粉嫩嫩的少女風介面**：比冷冰冰的工具可愛多了

## 🚀 使用方式

### 1. 取得免費的 Gemini API Key

1. 前往 [Google AI Studio](https://aistudio.google.com/apikey)
2. 使用 Google 帳號登入
3. 點擊「Create API key」
4. 複製那串 `AIza...` 開頭的字串

> 💡 **費用說明**：Gemini 2.5 Flash 免費額度為每天 1500 次請求，整理一份世界觀只算一次，完全夠用。

### 2. 打開工具並設定 Key

1. 開啟 [轉換器](https://iewiepeity.github.io/luvidovey-lorebook-converter/)
2. 把你的 API key 貼到輸入框，按「儲存」
3. API key 會存在你自己的瀏覽器（localStorage），**不會上傳任何伺服器**

### 3. 貼文字 → 按按鈕 → 複製到卿卿我我

1. 把你的世界觀文本貼到左邊的大框框（或上傳 .md / .txt 檔）
2. 選擇你要整理的類別、預期條目數量
3. 點「✨ 讓 AI 幫我整理」
4. 等待 10-30 秒
5. 右邊會產生一條條的 lorebook 條目，每條都可以編輯
6. 點「複製此項」，到卿卿我我 App 的「設定集 → 新增項目」貼上即可

## 🔒 隱私與安全

- **所有運算都在你的瀏覽器本地進行**，本站無後端伺服器
- **API key 只存在你自己的瀏覽器 localStorage**，作者與任何第三方都看不到
- **你貼入的世界觀文本**，只會被送往 Google Gemini API 進行處理，不經過任何中間伺服器
- 整份原始碼開源、可檢視

## 🛠️ 本地執行

如果你想在自己電腦跑，不需要任何安裝，直接：

```bash
git clone https://github.com/iewiepeity/luvidovey-lorebook-converter.git
cd luvidovey-lorebook-converter
# 用瀏覽器直接打開 index.html 即可
open index.html  # Mac
```

## 🤝 貢獻

歡迎 issue / PR！特別歡迎：

- 關鍵字提取邏輯的優化
- 支援更多類別或語言
- UI/UX 改善

## 📝 授權

MIT License — 自由使用、修改、散布。

## 💕 致謝

- [卿卿我我](https://loveydovey.ai/) — 超棒的 AI 聊天平台
- [Google Gemini](https://ai.google.dev/) — 免費又強大的 AI API

---

Made with 🌸 for the LoveyDovey community
