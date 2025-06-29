"use client"

import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

/**
 * 顏色模式提供者的屬性介面，繼承自 next-themes 的 ThemeProviderProps
 */
export interface ColorModeProviderProps extends ThemeProviderProps {}

/**
 * 顏色模式提供者組件
 * 使用 next-themes 的 ThemeProvider 來管理深色/淺色主題
 * 
 * @param props - 主題提供者的屬性
 * @returns ThemeProvider 組件
 */
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}

/**
 * 顏色模式類型定義
 */
export type ColorMode = "light" | "dark"

/**
 * useColorMode Hook 的返回值介面
 */
export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

/**
 * 自定義 Hook：管理顏色模式
 * 提供當前主題、設置主題和切換主題的功能
 * 
 * @returns 包含顏色模式相關方法和狀態的物件
 */
export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

/**
 * 根據當前顏色模式返回對應的值
 * 
 * @param light - 淺色模式下的值
 * @param dark - 深色模式下的值
 * @returns 根據當前模式返回對應的值
 */
export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

/**
 * 顏色模式圖標組件
 * 根據當前主題顯示對應的圖標（月亮或太陽）
 * 
 * @returns 對應主題的圖標組件
 */
export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

/**
 * 顏色模式按鈕的屬性介面
 * 排除 aria-label 屬性，因為組件內部會自動設置
 */
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

/**
 * 顏色模式切換按鈕組件
 * 點擊可以在深色和淺色主題之間切換
 * 使用 ClientOnly 包裝以避免 SSR 水合問題
 * 
 * @param props - 按鈕屬性
 * @param ref - 按鈕的 ref
 * @returns 主題切換按鈕組件
 */
export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})

/**
 * 強制淺色模式組件
 * 無論當前主題如何，都會以淺色模式顯示內容
 * 
 * @param props - Span 組件的屬性
 * @param ref - Span 組件的 ref
 * @returns 強制淺色模式的 Span 組件
 */
export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)

/**
 * 強制深色模式組件
 * 無論當前主題如何，都會以深色模式顯示內容
 * 
 * @param props - Span 組件的屬性
 * @param ref - Span 組件的 ref
 * @returns 強制深色模式的 Span 組件
 */
export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  },
)
