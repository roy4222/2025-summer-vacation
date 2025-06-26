# Dev-Dash 開發者工具儀表板

這份專案提案將圍繞你的學習清單設計，讓你能在一個專案中，把 Chakra UI、React Hooks、演算法、SSR、原子設計和 Git 流程全部應用一遍。

## 專案概念

打造一個專為開發者設計的單頁式網頁應用（SPA），整合多種常用的小工具。這個專案不僅實用，而且結構清晰，非常適合用來練習元件化開發、狀態管理和效能優化。

## 核心目標

將你的「暑假實習變強計畫」中的 **7 大主題** 全部融入這個專案的開發流程與最終成品中。

## 專案需求

### 技術棧
- **前端框架**: Next.js (支援 SSR/SSG)
- **UI 元件庫**: Chakra UI v2
- **狀態管理**: React Hooks
- **程式碼管理**: Git + GitHub PR 流程
- **部署平台**: Vercel 或 Netlify
- **資料儲存**: LocalStorage (本地存儲)

### 里程碑規劃

#### 里程碑 1: 專案基礎建設 (Week 1)
**目標**: 建立專案架構與基礎 UI 元件
- [x] 使用 `create-next-app` 建立專案
- [x] 整合 Chakra UI v2 並設定自訂主題
- [x] 實作原子設計系統（原子、分子、有機體）
- [x] 建立響應式佈局架構
- [x] 設定 Git 分支策略與第一個 PR

#### 里程碑 2: 演算法效能測試器 (Week 2)
**目標**: 實作核心功能模組，練習 React Hooks 與演算法
- [ ] 建立費波那契數列計算器介面
- [ ] 實作三種演算法（純遞迴、記憶化、動態規劃）
- [ ] 整合 BigInt 處理大數字
- [ ] 使用 useMemo、useCallback 優化效能
- [ ] 新增執行時間測量功能

#### 里程碑 3: 內容管理功能 (Week 3)
**目標**: 實作 Markdown 預覽器與 Git 速查表
- [ ] 建立 Markdown 即時預覽器（左右分割佈局）
- [ ] 整合 react-markdown 函式庫
- [ ] 建立 Git 指令速查表（使用 SSG）
- [ ] 實作每日名言功能（使用 SSR）

#### 里程碑 4: 使用者體驗優化 (Week 4)
**目標**: 完善專案並準備部署
- [ ] 實作響應式設計（RWD）
- [ ] 加入 Loading 狀態與錯誤處理
- [ ] 程式碼重構與效能優化
- [ ] 部署到 Vercel 並設定自動部署

#### 里程碑 5: 專案總結與文件
**目標**: 完善專案文件與學習總結
- [ ] 撰寫完整的 README 文件
- [ ] 建立使用說明文件
- [ ] 整理學習心得與技術筆記
- [ ] 準備作品集展示頁面

## 功能模組規劃

### 1. 演算法效能測試器 (Algorithm Performance Tester)
**目的**: 直接應用遞迴函數學習成果

**功能**:
- 輸入框：讓使用者輸入費波那契數列的 `n` 值
- 三個按鈕：分別觸發不同演算法
  - 純遞迴演算法
  - 記憶化 (Memoization) 演算法  
  - 動態規劃 (DP) 演算法
- 結果顯示：計算結果與執行時間
- 大數字處理：使用 `BigInt` 處理並以字串形式顯示

### 2. Markdown 即時預覽器 (Markdown Live Previewer)
**目的**: 練習複雜的狀態管理與 DOM 操作

**功能**:
- 左右分割佈局
- 左側：Markdown 輸入區 (textarea)
- 右側：即時 HTML 預覽區
- 整合 `react-markdown` 或 `marked.js`
- 自動同步滾動

### 3. Git 指令速查表 (Git Cheatsheet)
**目的**: 練習 SSR/SSG 與靜態內容呈現

**功能**:
- 靜態頁面展示常用 Git 指令
- 卡片或列表形式呈現
- 使用 JSON 檔案儲存資料
- 透過 `getStaticProps` 實作 SSG

## 技術實作對應

| 學習項目 | 專案中的應用 |
|---------|-------------|
| **Chakra UI v2** | 整個專案的 UI 系統，包含 Button、Input、Box、Flex、Grid 等元件，以及 extendTheme 主題客製化 |
| **原子設計** | 組織元件架構：原子 (Button, Input)、分子 (輸入框+按鈕組合)、有機體 (完整工具卡片)、模板 (儀表板佈局)、頁面 (完整儀表板) |
| **React Hooks** | useState (輸入狀態管理)、useEffect (副作用處理)、useMemo (快取昂貴計算)、useCallback (事件處理優化)、useRef (DOM 元素參考) |
| **SSR (Next.js)** | getServerSideProps (每日名言功能)、getStaticProps (Git 速查表)，體驗不同渲染模式的優勢 |
| **Git PR** | 每個新功能建立獨立的 feature 分支，完成後建立 Pull Request，包含清楚的 PR 描述與測試說明 |
| **Code Review** | 自我審查流程：建立 PR 後進行逐行檢查，思考程式碼品質、命名清晰度、函式拆分等面向 |

## 開發流程指南

### Week 1: 基礎建設與第一個元件
1. 使用 `create-next-app` 建立專案
2. 整合 Chakra UI v2 並設定自訂主題
3. 實作原子設計系統的基礎元件
4. 建立 `feature/layout` 分支完成儀表板基本佈局
5. 提交第一個 PR

### Week 2: 核心功能開發  
1. 建立 `feature/fibonacci-tester` 分支
2. 實作三種費氏數列演算法
3. 整合 BigInt 處理大數字
4. 大量使用 React Hooks 進行狀態管理與效能優化
5. 進行自我 Code Review 後合併 PR

### Week 3: 擴充功能與 SSR
1. 建立新分支開發 Markdown 預覽器
2. 建立 Git 指令速查表功能
3. 練習使用 `getStaticProps` 實作 SSG
4. 為主頁面加入 `getServerSideProps`，串接 [Quotable API](https://github.com/lukePeavey/quotable) 獲取每日名言

### Week 4: 優化與總結
1. 完善響應式設計 (RWD)
2. 程式碼重構與效能優化  
3. 部署到 Vercel 或 Netlify
4. 將 GitHub 連結整理到履歷中

---

## 專案前哨戰：微型練習

在正式開發前，建議先完成以下 5 個微型練習來熟悉各項技術：

### 練習 1: 環境建立與原子設計初體驗
**目標**: 熟悉 Next.js + Chakra UI 開發環境，實踐基礎原子設計

**步驟**:
1. 建立 Next.js 專案並安裝 Chakra UI
2. 設定 ChakraProvider
3. 建立原子元件 (PrimaryButton)
4. 建立分子元件 (UserInfoCard)
5. 在頁面中使用元件

**驗收標準**:
- ✅ 網頁成功顯示包含頭像、姓名、職稱和按鈕的卡片
- ✅ 理解原子與分子元件的概念

### 練習 2: 互動與副作用 (useState, useEffect)
**目標**: 掌握 React Hooks 核心功能

**步驟**:
1. 建立計時器介面
2. 使用 useState 管理計時器狀態
3. 使用 useEffect 處理計時器邏輯
4. 實作開始/暫停/重設功能
5. 同步更新網頁標題

**驗收標準**:
- ✅ 計時器正常運作，數字每秒更新
- ✅ 網頁標題同步顯示當前秒數
- ✅ 開始/暫停/重設功能正常

### 練習 3: 演算法與效能優化 (useMemo, 費波那契)
**目標**: 體驗昂貴計算對效能的影響，學會使用 useMemo 優化

**步驟**:
1. 建立費波那契計算器介面
2. 實作未優化的遞迴函式
3. 體驗效能瓶頸問題
4. 使用 useMemo 優化計算
5. 觀察優化前後的差異

**驗收標準**:
- ✅ 輸入大數字後 UI 保持流暢
- ✅ Console 確認計算只在必要時執行

### 練習 4: 伺服器端渲染 (getServerSideProps)
**目標**: 學習 Next.js SSR 功能

**步驟**:
1. 建立新頁面 `/joke`
2. 實作 getServerSideProps 函式
3. 從公開 API 獲取隨機笑話
4. 在頁面中顯示資料

**驗收標準**:
- ✅ 每次刷新頁面看到不同笑話
- ✅ 檢視原始碼可見伺服器渲染內容

### 練習 5: 開發流程模擬 (Git PR & Code Review)
**目標**: 模擬真實 Git 協作流程

**步驟**:
1. 建立 feature 分支
2. 開發頁尾元件功能
3. 提交有意義的 commit
4. 建立 Pull Request
5. 進行自我 Code Review
6. 合併 PR 並清理分支

**驗收標準**:
- ✅ 成功建立並合併 PR
- ✅ 體驗完整的 Git 協作流程

完成這些微型練習後，就可以開始正式的 Dev-Dash 專案開發了！