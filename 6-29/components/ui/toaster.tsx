"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"

/**
 * 全域 Toast 通知器實例
 * 配置 Toast 顯示位置和行為
 * 
 * @property placement - Toast 顯示位置設定為右下角
 * @property pauseOnPageIdle - 當頁面閒置時暫停 Toast 自動消失
 */
export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
})

/**
 * Toast 通知組件
 * 提供全域的通知訊息顯示功能，支援不同類型的通知
 * 
 * 功能特色：
 * - 支援載入中狀態顯示
 * - 可自定義標題和描述
 * - 支援操作按鈕和關閉按鈕
 * - 響應式設計，適配不同螢幕尺寸
 * 
 * @returns Toast 通知組件的 JSX 元素
 */
export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ md: "sm" }}>
            {/* 根據 Toast 類型顯示不同的指示器 */}
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            
            {/* Toast 內容區域 */}
            <Stack gap="1" flex="1" maxWidth="100%">
              {/* 顯示標題（如果存在） */}
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {/* 顯示描述內容（如果存在） */}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            
            {/* 顯示操作按鈕（如果存在） */}
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            
            {/* 顯示關閉按鈕（如果可關閉） */}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
