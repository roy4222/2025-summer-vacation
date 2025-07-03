好的，我們來全面且詳細地剖析 `useEffect` 的功能。你可以把 `useEffect` 想像成 React 元件與外部世界溝通的「官方橋樑」。它的核心功能可以歸納為以下幾個面向：

### 1. 執行副作用 (Executing Side Effects)

這是 `useEffect` 最根本、最核心的功能。

**什麼是副作用？**
任何在 React 元件渲染過程之外，會影響到外部世界或被外部世界影響的操作，都稱為副作用。簡單來說，就是**除了「根據 props 和 state 計算並返回 JSX」之外的所有事情**。

**常見的副作用例子：**

- **與伺服器通訊**：
  - `fetch` 或 `axios` API 請求 (GET, POST, PUT, DELETE)。
- **與瀏覽器 API 互動**：
  - **DOM 操作**：手動修改 DOM 元素，例如 `document.title`、`document.body.style` 或整合 D3.js 等非 React 的 DOM 函式庫。
  - **計時器**：`setTimeout`、`setInterval`。
  - **儲存**：`localStorage`、`sessionStorage` 的讀寫。
- **訂閱與監聽**：
  - **事件監聽**：`window.addEventListener('resize', ...)`、`document.addEventListener('keydown', ...)`。
  - **外部數據源訂閱**：連接 WebSocket、監聽 Firebase 的即時資料庫變化。

**為什麼需要 `useEffect` 來執行？**
React 的渲染函式（元件本身）被設計為「純函式」，即相同的輸入（props 和 state）應該產生相同的輸出（JSX）。直接在渲染函式中執行副作用會導致不可預測的行為，例如在每次渲染時都發起一次 API 請求，造成無限循環。`useEffect` 提供了一個安全的「沙盒」，讓這些副作用在元件渲染到螢幕**之後**才執行。

```jsx
// 在元件渲染完成後，才去抓取用戶數據
useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then((res) => res.json())
    .then((data) => setUser(data));
}, [userId]);
```

### 2. 控制 Effect 的執行時機 (Controlling When Effects Run)

`useEffect` 的第二個參數——**依賴陣列 (Dependency Array)**——是其最精髓的功能之一。它讓你精確控制副作用的執行頻率。

| 依賴陣列的寫法                                                      | 執行時機                                                                                                                                                                                                       | 用途                                                                                                                                                                                     |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`useEffect(callback)` (不傳遞第二個參數)**                        | **每次渲染後都會執行** (包括初始渲染和所有更新)。                                                                                                                                                              | **極少使用，且通常是錯誤的。** 容易造成無限循環，除非你有非常特殊的理由。                                                                                                                |
| **`useEffect(callback, [])` (傳遞空陣列)**                          | **僅在元件第一次掛載 (mount) 到 DOM 後執行一次。**                                                                                                                                                             | **初始化操作**：<br> - 只需執行一次的 API 請求。<br> - 設定全域事件監聽器。<br> - 建立 WebSocket 連接。                                                                                  |
| **`useEffect(callback, [dep1, dep2, ...])` (傳遞包含依賴項的陣列)** | 1. 在元件第一次掛載後執行。<br> 2. 在後續的每次渲染後，React 會比較陣列中的每個依賴項 (`dep1`, `dep2`...) 與上一次渲染時的值。**只要有任何一個依賴項發生變化**（使用 `Object.is` 比較），Effect 就會重新執行。 | **響應式副作用**：<br> - 當 `userId` prop 改變時，重新抓取用戶資料。<br> - 當搜尋關鍵字 `searchTerm` state 改變時，重新篩選列表。<br> - 當 `count` state 改變時，更新 `document.title`。 |

這個功能是 React Hooks 響應式模型的基石。它將副作用的執行與特定數據的變化**聲明式地**綁定在一起。

### 3. 清理副作用 (Cleaning Up Effects)

許多副作用會建立一些需要手動「拆除」的東西，否則會導致**記憶體洩漏 (Memory Leaks)** 或**邏輯錯誤**。`useEffect` 內建了優雅的清理機制。

**如何清理？**
在 `useEffect` 的回呼函式中 `return` 一個函式，這個被返回的函式就是**清理函式 (Cleanup Function)**。

**清理函式何時執行？**

1.  **元件卸載 (unmount) 時**：當元件從 DOM 中移除時，React 會執行最後一次的清理。
2.  **下一次 Effect 執行前**：如果依賴項發生變化導致 Effect 需要重新執行，React 會**先執行上一次 Effect 的清理函式**，然後再執行新的 Effect。這確保了不會有多個 Effect 的實例（例如多個計時器或監聽器）同時存在。

**需要清理的常見場景：**

- **計時器**：`return () => clearInterval(timerId);`
- **事件監聽**：`return () => window.removeEventListener('resize', handleResize);`
- **WebSocket/訂閱**：`return () => socket.disconnect();` 或 `return () => unsubscribe();`
- **取消 API 請求**：使用 `AbortController`，在清理函式中呼叫 `controller.abort()`。

```jsx
useEffect(() => {
  const handler = () => console.log("scrolled");
  window.addEventListener("scroll", handler);

  // 清理函式：在元件卸載時移除監聽器
  return () => {
    window.removeEventListener("scroll", handler);
  };
}, []); // 空陣列，表示監聽器只掛載/移除一次
```

### 總結：useEffect 的功能全景圖

| 功能             | 描述                                                     | 實現方式                                                     | 解決的問題                                                          |
| :--------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------ |
| **執行副作用**   | 允許元件與外部系統（API、DOM、瀏覽器）互動。             | `useEffect` 的第一個參數：一個回呼函式。                     | 將不純的操作與純粹的渲染邏輯分離，避免渲染過程中的不可預測行為。    |
| **控制執行時機** | 精確決定副作用在何時（以及是否）重新執行。               | `useEffect` 的第二個參數：依賴陣列 (`[]`, `[dep]`, 或省略)。 | 避免不必要的重複操作（如 API 請求），提升性能，並實現響應式的行為。 |
| **清理副作用**   | 在元件生命週期結束或 Effect 更新前，釋放資源、取消訂閱。 | 在 Effect 函式中 `return` 一個清理函式。                     | 防止記憶體洩漏和殭屍副作用（例如，已卸載的元件仍在更新 state）。    |

`useEffect` 是一個功能強大且多用途的 Hook。它將傳統 Class 元件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 這三個生命週期方法的功能，統一到一個更具聲明性和一致性的 API 中。熟練掌握這三大功能，是成為高效 React 開發者的關鍵一步。
