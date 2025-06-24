# 暑假實習變強計畫

## 1. **Chakra v2 CSS 庫**

- **說明**：Chakra UI 是一個基於 React 的 UI 組件庫，提供可高度自定義、易於使用的組件，支援無障礙設計（a11y）及主題化。
- **準備重點**：
    - 熟悉 Chakra UI v2 的核心組件（Button、Box、Stack、Flex 等）。
    - 學習其主題系統（Theme、extendTheme）與樣式屬性（sx、props）。
    - 練習響應式設計（使用 `useBreakpointValue` 或陣列語法）。
    - 查看官方文件（[https://chakra-ui.com/docs](https://chakra-ui.com/docs)），重點看 v2 的更新，例如改進的 TypeScript 支援和性能優化。
    - 嘗試搭建一個簡單的頁面（例如表單或卡片組件）來熟悉語法。
- **建議**：下載官方範例程式碼，實際運行並修改，快速上手。

> **你不是實力不夠，也不是太依賴 AI。你只是被「學習」這個詞給騙了。**

---

## 2. **遞迴函數 - 費波那契數列（數字 50、100、1000）**

📖 參考文章：[初學者學演算法｜從費氏數列認識何謂遞迴](https://medium.com/appworks-school/%E5%88%9D%E5%AD%B8%E8%80%85%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-%E5%BE%9E%E8%B2%BB%E6%B0%8F%E6%95%B8%E5%88%97%E8%AA%8D%E8%AD%98%E4%BD%95%E8%AC%82%E9%81%9E%E8%BF%B4-dea15d2808a3)

- **說明**：費波那契數列是一個數列，每個數字是前兩個數字之和（F(n) = F(n-1) + F(n-2)，F(0)=0，F(1)=1）。
- **準備重點**：
    - **基本遞迴實現**：
        ```javascript
        function fibonacci(n) {
          if (n <= 1) return n;
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
        ```
        - 問題：對於大數字（50、100、1000），純遞迴效率低，會導致堆疊溢位或性能瓶頸。
    - **優化方式**：
        - **動態規劃（DP）**：使用陣列或物件儲存中間結果，避免重複計算。
            ```javascript
            function fibonacciDP(n) {
              let dp = [0, 1];
              for (let i = 2; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
              }
              return dp[n];
            }
            ```
        - **記憶化（Memoization）**：快取遞迴結果。
            ```javascript
            function fibonacciMemo(n, memo = {}) {
              if (n <= 1) return n;
              if (n in memo) return memo[n];
              memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
              return memo[n];
            }
            ```
    - **針對大數字（50、100、1000）**：
        - 費波那契數列增長很快，1000 可能導致數值溢位，需考慮使用 BigInt（JavaScript）。
            ```javascript
            function fibonacciBigInt(n) {
              let dp = [BigInt(0), BigInt(1)];
              for (let i = 2; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
              }
              return dp[n];
            }
            console.log(fibonacciBigInt(50).toString());  // 測試50
            console.log(fibonacciBigInt(100).toString()); // 測試100
            console.log(fibonacciBigInt(1000).toString()); // 測試1000
            ```
    - **建議**：實作以上三種方法，比較性能（例如用 `console.time`），並理解為何純遞迴不適合大數字。

---

## 3. **React Hooks**

📖 參考文章：[React Hooks 詳解](https://hackmd.io/@Heidi-Liu/react-hooks)

### useEffect
- **說明**：用於處理副作用（side effects），如資料請求、訂閱、或 DOM 操作。
- **準備重點**：
    - 理解 `useEffect` 的依賴陣列（dependency array）如何影響執行時機。
    - 學習清除副作用（return cleanup function），例如取消定時器或取消訂閱。
        ```javascript
        useEffect(() => {
          const timer = setInterval(() => console.log("Tick"), 1000);
          return () => clearInterval(timer); // 清除定時器
        }, []); // 空依賴表示僅在組件掛載/卸載時執行
        ```
    - 常見用途：API 請求、事件監聽器設置。

### useRef
- **說明**：用於儲存可變引用，常用於存取 DOM 元素或保存不會觸發重新渲染的值。
- **準備重點**：
    - 訪問 DOM：`const inputRef = useRef(null);` 可用於聚焦輸入框（`inputRef.current.focus()`）。
    - 儲存變數：`useRef` 的 `.current` 不會因重新渲染而重置。
        ```javascript
        const countRef = useRef(0);
        countRef.current += 1; // 不觸發重新渲染
        ```

### useCallback
- **說明**：快取函數，防止子組件不必要的重新渲染。
- **準備重點**：
    - 搭配 `React.memo` 使用，確保函數引用穩定。
        ```javascript
        const memoizedCallback = useCallback(() => {
          console.log("Called");
        }, []); // 依賴陣列控制函數重新創建
        ```

### useMemo
- **說明**：快取計算結果，優化性能。
- **準備重點**：
    - 用於昂貴的計算（例如資料處理）。
        ```javascript
        const memoizedValue = useMemo(() => expensiveCalculation(data), [data]);
        ```

**建議**：搭建一個 React 專案，實作一個包含 `useEffect`（API 請求）、`useRef`（表單聚焦）、`useCallback`（傳遞給子組件）、`useMemo`（計算篩選資料）的範例。

📖 延伸閱讀：[React Hooks 深入探討](https://gcdeng.com/blog/react-hooks#usememo)

---

## 4. **SSR（Server-Side Rendering）**

- **說明**：伺服器端渲染技術，在伺服器生成 HTML，提升首屏加載速度和 SEO。
- **準備重點**：
    - 熟悉 Next.js（常見 SSR 框架），學習其 `getServerSideProps` 或 `getStaticProps`。
    - 理解 SSR 與 CSR（客戶端渲染）的區別：
        - SSR：伺服器返回完整 HTML，適合 SEO 和快速首屏。
        - CSR：客戶端負責渲染，適合動態互動。
    - 實作一個簡單 Next.js 頁面，使用 SSR 從 API 獲取資料並渲染。
    - 注意 Hydration（客戶端接管伺服器渲染的過程）。
- **建議**：閱讀 [Next.js 官方文件](https://nextjs.org/docs)，搭建一個 SSR 範例（例如動態博客頁面）。

---

## 5. **Git PR（Pull Request）**

- **說明**：Git 的分支合併請求，用於團隊協作和程式碼審查。
- **準備重點**：
    - 熟悉 Git 流程：
        1. 創建分支：`git checkout -b feature/xxx`
        2. 提交變更：`git commit -m "描述"`
        3. 推送分支：`git push origin feature/xxx`
        4. 創建 PR：在 GitHub/GitLab 上提交合併請求。
    - 撰寫清晰的 PR 描述，包含變更內容、目的和測試方式。
    - 處理 PR 衝突：使用 `git rebase` 或 `git merge` 解決。
- **建議**：模擬一個小專案，創建分支並提交 PR，練習與同事模擬審查流程。

---

## 6. **原子設計（Atomic Design）**

- **說明**：由 Brad Frost 提出的 UI 設計方法論，將介面分解為五層：原子（Atoms）、分子（Molecules）、有機體（Organisms）、模板（Templates）、頁面（Pages）。
- **準備重點**：
    - **原子**：基礎元素（按鈕、輸入框）。
    - **分子**：組合原子（表單、搜尋列）。
    - **有機體**：更複雜的組件（導航欄、卡片列表）。
    - **模板**：頁面佈局。
    - **頁面**：最終呈現的完整頁面。
    - 學習如何在 React/Chakra UI 中實現原子設計，確保組件可重用。
- **建議**：設計一個簡單頁面（例如待辦清單），分解為原子、分子、有機體，並使用 Chakra UI 實現。

---

## 7. **Code Review**

- **說明**：程式碼審查是檢查程式碼質量、確保一致性和減少錯誤的過程。
- **準備重點**：
    - **審查者**：
        - 檢查程式碼可讀性、命名規範、邏輯正確性。
        - 確認是否有單元測試、文件完整性。
        - 提供具體、建設性的反饋（例如「建議將這段邏輯提取為獨立函數以提高可讀性」）。
    - **被審查者**：
        - 提交乾淨的程式碼（格式化、移除無用註釋）。
        - 回應審查意見，解釋設計決策。
    - 熟悉常見工具：GitHub PR 評論、GitLab MR、CodeClimate。
- **建議**：模擬一次程式碼審查，找朋友或自己檢查一個小專案，記錄問題和改進建議。

---

## 學習計劃建議

1. **第一週**：熟悉 Chakra UI 和 React Hooks，搭建一個簡單的 React 應用，包含表單和動態資料展示。
2. **第二週**：實作費波那契數列（包含純遞迴、DP、記憶化），並測試大數字（50、100、1000）。
3. **第三週**：學習 Next.js SSR，搭建一個動態頁面，並結合 Chakra UI 和原子設計。
4. **第四週**：練習 Git PR 流程，模擬程式碼審查，整理反饋並改進程式碼。

---

## 額外建議

- **實作專案**：將所有知識整合到一個小專案（例如一個簡單的待辦清單或博客），使用 Chakra UI、React Hooks、SSR，並提交到 GitHub 進行 PR 和 Code Review。
- **資源**：
    - [Chakra UI 官方文件](https://chakra-ui.com/docs)
    - [Next.js 官方文件](https://nextjs.org/docs)
    - 原子設計：Brad Frost 的《Atomic Design》或線上文章
    - Git：Pro Git 書籍或 GitHub 官方教程
- **記錄筆記**：使用 Notion 或類似工具記錄每個主題的學習心得和程式碼片段，方便複習。

如果您需要更詳細的某部分說明（例如程式碼範例、資源連結），或想讓我幫您設計某部分的練習題，請隨時告訴我！
