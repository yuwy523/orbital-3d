# Orbital: 3D Solar Explorer

這是一個互動式的 3D 太陽系模擬器，具備真實的軌道力學模擬與 AI 天文導覽功能介面。

**注意**：此版本為演示版 (Demo Version)，AI 功能使用模擬數據 (Mock Data)，無需 API Key 即可運行。

## 專案結構

- **components/**: React UI 組件 (SolarSystem, Controls, InfoPanel 等)
- **services/**: Mock AI Service (模擬資料回傳)
- **public/**: 靜態資源 (如圖片)

## 本地開發 (Local Development)

1. 安裝相依套件:
   ```bash
   npm install
   ```

2. 啟動開發伺服器:
   ```bash
   npm run dev
   ```

## 部署到 GitHub Pages (Deployment)

本專案已設定好自動化部署腳本，請依下列步驟操作：

1. **推送程式碼到 GitHub**
   確保您的專案已經上傳到 GitHub Repository。

2. **執行部署指令**
   在終端機 (Terminal) 執行：
   ```bash
   npm run deploy
   ```
   此指令會自動執行打包 (`npm run build`) 並將 `dist` 資料夾的內容推送到 `gh-pages` 分支。

3. **設定 GitHub Pages**
   - 前往 GitHub Repository 的 **Settings** -> **Pages**。
   - 確保 **Source** 選擇 `Deploy from a branch`。
   - 確保 **Branch** 選擇 `gh-pages` / `/(root)`。
   - 儲存後，您的網站將於數分鐘內上線。

---

## Credits & Attribution
   - [Solar System Scope](https://www.solarsystemscope.com/textures/)
   - [NASA 3D Resources](https://science.nasa.gov/3d-resources/)
