"use client";

import type { IconButtonProps, SpanProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

/**
 * 顏色模式提供者的屬性介面
 * 擴展 next-themes 的 ThemeProviderProps
 */
export interface ColorModeProviderProps extends ThemeProviderProps {}

/**
 * 顏色模式提供者組件
 * 包裝 next-themes 的 ThemeProvider，提供主題切換功能
 * 
 * @param props - 主題提供者的屬性
 * @returns 包含主題切換功能的提供者組件
 */
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

/**
 * 顏色模式類型定義
 * 支援淺色和深色兩種模式
 */
export type ColorMode = "light" | "dark";

/**
 * useColorMode Hook 的返回值介面
 * 包含當前顏色模式、設定模式和切換模式的方法
 */
export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

/**
 * 顏色模式管理 Hook
 * 提供當前主題狀態和切換主題的方法
 * 
 * @returns 包含顏色模式狀態和控制方法的物件
 */
export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  
  /**
   * 切換顏色模式
   * 在深色和淺色模式之間切換
   */
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

/**
 * 根據顏色模式返回對應的值
 * 類似於 Chakra UI v2 的 useColorModeValue
 * 
 * @param light - 淺色模式下的值
 * @param dark - 深色模式下的值
 * @returns 根據當前顏色模式返回對應的值
 */
export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

/**
 * 顏色模式圖示組件
 * 根據當前主題顯示對應的圖示（太陽或月亮）
 * 
 * @returns 當前主題對應的圖示元素
 */
export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

/**
 * 顏色模式按鈕的屬性介面
 * 繼承 IconButtonProps 但排除 aria-label 屬性
 */
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

/**
 * 顏色模式切換按鈕組件
 * 提供點擊切換主題的按鈕，包含適當的圖示和無障礙標籤
 * 
 * 功能特色：
 * - 自動顯示對應主題的圖示
 * - 包含無障礙支援
 * - 客戶端渲染以避免水合錯誤
 * - 載入時顯示骨架屏
 * 
 * @param props - 按鈕組件的屬性
 * @param ref - 按鈕元素的引用
 * @returns 主題切換按鈕組件
 */
export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
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
  );
});

/**
 * 淺色模式容器組件
 * 強制子元素使用淺色主題樣式
 * 
 * @param props - Span 組件的屬性
 * @param ref - Span 元素的引用
 * @returns 淺色主題容器組件
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
    );
  }
);

/**
 * 深色模式容器組件
 * 強制子元素使用深色主題樣式
 * 
 * @param props - Span 組件的屬性
 * @param ref - Span 元素的引用
 * @returns 深色主題容器組件
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
    );
  }
);
