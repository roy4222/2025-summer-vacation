"use client";

import { useRef } from "react";

export default function Home() {
  // 建立 ref 來獲取 video 元素的參照
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * 播放影片的事件處理函式
   * 使用 video 元素的 play() 方法
   */
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      console.log("▶️ 影片開始播放");
    }
  };

  /**
   * 暫停影片的事件處理函式
   * 使用 video 元素的 pause() 方法
   */
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      console.log("⏸️ 影片已暫停");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          簡易影片播放器
        </h1>
        
        {/* 影片元素 */}
        <div className="mb-6">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg shadow-sm"
            controls={false} // 隱藏預設控制項，使用自訂按鈕
            width="100%"
            height="auto"
          >
            {/* 提供多種格式的影片來源 */}
            <source 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
              type="video/mp4" 
            />
            <source 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" 
              type="video/webm" 
            />
            您的瀏覽器不支援影片播放。
          </video>
        </div>

        {/* 控制按鈕 */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={handlePlay}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 flex items-center space-x-2"
          >
            <span className="text-lg">▶️</span>
            <span>播放</span>
          </button>
          
          <button
            onClick={handlePause}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 flex items-center space-x-2"
          >
            <span className="text-lg">⏸️</span>
            <span>暫停</span>
          </button>
        </div>

        {/* 說明區塊 */}
        <div className="p-4 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            💡 <strong>useRef 練習重點：</strong>
            <br />
            • 使用 <code className="bg-blue-100 px-1 rounded">useRef</code> 獲取 video 元素的參照
            <br />
            • 呼叫 DOM 元素的 <code className="bg-blue-100 px-1 rounded">.play()</code> 和 <code className="bg-blue-100 px-1 rounded">.pause()</code> 方法
            <br />
            • 點擊按鈕控制影片播放狀態
            <br />
            • 打開瀏覽器 Console 查看操作記錄
          </p>
        </div>

        {/* 額外功能提示 */}
        <div className="mt-4 p-3 bg-yellow-50 rounded-md">
          <p className="text-sm text-yellow-800">
            🎬 <strong>影片來源：</strong>
            <br />
            使用 Google 提供的測試影片 "Big Buck Bunny"
            <br />
            如果影片無法載入，請檢查網路連線
          </p>
        </div>
      </div>
    </div>
  );
} 