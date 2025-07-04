"use client";

import { useRef, useEffect } from "react";

export default function Home() {
  // 建立 ref 來獲取 input 元素的參照
  const usernameInputRef = useRef<HTMLInputElement>(null);

  // 使用 useEffect 在元件掛載後執行自動對焦
  useEffect(() => {
    // 檢查 ref 是否存在並執行對焦
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
      console.log("✅ 使用者名稱輸入框已自動對焦");
    }
  }, []); // 空的依賴陣列，確保只在首次渲染後執行一次

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          使用者登入
        </h1>
        
        <form className="space-y-4">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              使用者名稱
            </label>
            <input
              ref={usernameInputRef}
              type="text"
              id="username"
              name="username"
              placeholder="請輸入使用者名稱"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              密碼
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="請輸入密碼"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            登入
          </button>
        </form>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            💡 <strong>useRef 練習重點：</strong>
            <br />
            頁面載入後，使用者名稱輸入框會自動獲得焦點
          </p>
        </div>
      </div>
    </div>
  );
}
