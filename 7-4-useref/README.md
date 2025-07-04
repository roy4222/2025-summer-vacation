絕佳的想法！動手做是學習最好的方式。

這裡為你準備了幾個由淺入深的 `useRef` 練習題，涵蓋了它的兩種主要用途。建議你先看目標和提示，試著自己寫寫看，真的卡關了再參考解答。

---

### 練習一：操作 DOM 元素

這些練習專注於 `useRef` 最常見的用途：獲取和操作 DOM 節點。

#### 題目 1：頁面載入後自動對焦

**🎯 目標：**
建立一個簡單的表單，當頁面首次載入完成時，使用者名稱（username）的輸入框應該要自動獲得焦點（focus）。

**📝 提示：**
1.  你需要 `useRef` 來獲取 input 元素的參照。
2.  你需要 `useEffect` 來在元件掛載（mount）後執行程式碼。
3.  `useEffect` 的依賴陣列（dependency array）應該是空的 `[]`，這樣它就只會在第一次渲染後執行一次。
4.  DOM 元素的 `focus()` 方法可以讓它獲得焦點。

**👇 參考解答：**

```jsx
import { useEffect, useRef } from 'react';

function AutoFocusForm() {
  const usernameRef = useRef(null);

  useEffect(() => {
    // 當元件渲染到畫面上後，usernameRef.current 就會指向 input DOM 元素
    if (usernameRef.current) {
      console.log("Component mounted, focusing on input...");
      usernameRef.current.focus();
    }
  }, []); // 空陣列確保只在首次渲染後執行

  return (
    <div>
      <h3>自動對焦表單</h3>
      <label>
        Username:
        <input ref={usernameRef} type="text" placeholder="我會自動對焦" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" />
      </label>
    </div>
  );
}
```

---

#### 題目 2：簡易影片播放器

**🎯 目標：**
放置一個影片（video）元素和兩個按鈕：「播放」和「暫停」。點擊按鈕時，可以控制影片的播放與暫停。

**📝 提示：**
1.  用 `useRef` 取得 `<video>` 元素的參照。
2.  HTML `<video>` 元素有 `.play()` 和 `.pause()` 兩個方法。
3.  為兩個按鈕分別建立 `onClick` 事件處理函式。

**👇 參考解答：**

```jsx
import { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <h3>簡易影片播放器</h3>
      <video
        ref={videoRef}
        width="400"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      >
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div>
        <button onClick={handlePlay}>播放</button>
        <button onClick={handlePause}>暫停</button>
      </div>
    </div>
  );
}
```

---

### 練習二：儲存不會觸發渲染的值

這些練習專注於 `useRef` 的第二個用途：作為一個可變值的「儲物箱」，且更新它不會造成 re-render。

#### 題目 3：計算元件的渲染次數

**🎯 目標：**
建立一個元件，畫面上有一個計數器（由 `useState` 控制）和一個按鈕。每當點擊按鈕增加計數器時，畫面也要顯示這個元件總共被渲染（render）了幾次。

**⚠️ 挑戰：** 如果你用 `useState` 來儲存渲染次數，會發生什麼事？（提示：無限迴圈）

**📝 提示：**
1.  用 `useState` 儲存畫面上看到的計數器 `count`。
2.  用 `useRef` 來儲存渲染次數 `renderCount`，並給它一個初始值 `useRef(0)`。
3.  在函式元件的頂層（每次渲染都會執行的部分）將 `renderCount.current` 加一。
4.  在畫面上顯示 `renderCount.current`。

**👇 參考解答：**

```jsx
import { useState, useRef } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // 每次元件渲染時，這段程式碼都會執行
  // 我們更新 ref 的 .current 屬性，但這不會觸發另一次渲染
  renderCount.current += 1;

  return (
    <div>
      <h3>渲染次數計數器</h3>
      <p>State Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        增加 Count (會觸發渲染)
      </button>
      <p>這個元件總共被渲染了 {renderCount.current} 次。</p>
    </div>
  );
}
```
**思考一下：** 如果你把 `renderCount` 改成 `useState`，`setRenderCount(renderCount + 1)` 會觸發渲染，然後又執行 `setRenderCount`，導致無限迴圈。這就是為什麼 `useRef` 在此場景下是正確的選擇。

---

#### 題目 4：追蹤前一次的 State 值

**🎯 目標：**
建立一個元件，顯示目前的計數器值，同時也顯示「前一次」的計數器值。

**📝 提示：**
1.  你需要 `useState` 來儲存目前的值 `count`。
2.  你需要 `useRef` 來儲存前一次的值 `previousCountRef`。
3.  關鍵在於 `useEffect`。`useEffect` 裡面的程式碼是在「渲染完成後」才執行的。
4.  所以在 `useEffect` 裡面，你可以把「目前」的 `count` 值存到 `previousCountRef.current` 中，這樣它就變成了下一次渲染時的「前一次的值」。

**👇 參考解答：**

```jsx
import { useState, useEffect, useRef } from 'react';

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef();

  // useEffect 在每次渲染 *之後* 執行
  useEffect(() => {
    // 在這裡，我們把 *當前* 的 count 值存到 ref 中
    // 這個 ref 的值會在下一次渲染時被讀取
    console.log(`渲染完成，將 ${count} 存入 ref`);
    previousCountRef.current = count;
  }, [count]); // 依賴 count，這樣 count 變了才會更新 ref

  // 在渲染期間，previousCountRef.current 拿到的會是 *上一次* 渲染後存入的值
  const previousCount = previousCountRef.current;
  console.log(`正在渲染... 當前 count: ${count}, ref 中的值 (前一次的 count): ${previousCount}`);

  return (
    <div>
      <h3>追蹤前一次的 State</h3>
      <p>目前的 Count: {count}</p>
      <p>前一次的 Count: {previousCount === undefined ? 'N/A' : previousCount}</p>
      <button onClick={() => setCount(c => c + 1)}>增加 Count</button>
    </div>
  );
}
```

希望這些練習能幫助你更深入地理解 `useRef` 的強大之處！