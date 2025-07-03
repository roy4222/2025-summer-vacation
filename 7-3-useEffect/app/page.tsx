"use client";

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Effect 執行了！設定計時器。");
    
    // 將 setInterval 的 ID 存起來
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // ✨ 清除函式 (Cleanup Function) ✨
    // 這個 return 的函式，會在元件「卸載」前被呼叫
    return () => {
      console.log("清除函式執行了！清除計時器。");
      clearInterval(intervalId); // 使用 ID 來清除對應的計時器
    };

  }, []); // 依賴陣列仍然是空的

  return <h1>計時器: {seconds} 秒</h1>;
}

// 修改 App 元件來控制 Timer 的顯示與否
export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      {/* 當 showTimer 是 true 時，才渲染 Timer 元件 */}
      {showTimer && <Timer />}

      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? '隱藏計時器' : '顯示計時器'}
      </button>
    </div>
  );
}
