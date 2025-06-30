"use client";

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react";

/**
 * 全域吐司通知器實例
 * 使用 Chakra UI 的 createToaster 創建，配置為：
 * - 顯示位置：右下角 (bottom-end)
 * - 當頁面閒置時暫停自動關閉 (pauseOnPageIdle: true)
 */
export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
});

/**
 * Toaster 組件
 * 用於在應用程式中顯示吐司通知的容器組件
 *
 * 功能特點：
 * - 使用 Portal 將通知渲染到 DOM 的頂層，避免 z-index 問題
 * - 支援載入狀態顯示 (Spinner)
 * - 響應式寬度設計，在中等螢幕及以上使用固定寬度
 * - 支援標題、描述、動作按鈕和關閉按鈕
 *
 * @returns 吐司通知容器組件
 */
export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ md: "sm" }}>
            {/* 根據吐司類型顯示不同的指示器：載入中顯示 Spinner，其他顯示狀態指示器 */}
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            {/* 主要內容區域，包含標題和描述 */}
            <Stack gap="1" flex="1" maxWidth="100%">
              {/* 條件渲染標題 */}
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {/* 條件渲染描述 */}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {/* 條件渲染動作按鈕 */}
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {/* 條件渲染關閉按鈕 */}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
