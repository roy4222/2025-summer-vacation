"use client";

import type { IconButtonProps, SpanProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

/**
 * 顏色模式提供者的屬性介面
 * 繼承自 next-themes 的 ThemeProviderProps
 */
export interface ColorModeProviderProps extends ThemeProviderProps {}

/**
 * 顏色模式提供者組件
 * 使用 next-themes 的 ThemeProvider 來管理應用程式的主題狀態
 *
 * @param props - 主題提供者的屬性
 * @returns 包裝了主題管理功能的提供者組件
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
 */
export interface UseColorModeReturn {
  /** 當前的顏色模式 */
  colorMode: ColorMode;
  /** 設定顏色模式的函數 */
  setColorMode: (colorMode: ColorMode) => void;
  /** 切換顏色模式的函數 */
  toggleColorMode: () => void;
}

/**
 * 自定義 Hook：管理顏色模式
 * 提供當前主題狀態和切換功能
 *
 * @returns 包含顏色模式狀態和控制函數的物件
 */
export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
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
 * 根據當前顏色模式返回對應的值
 *
 * @param light - 淺色模式時返回的值
 * @param dark - 深色模式時返回的值
 * @returns 根據當前模式返回對應的值
 */
export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

/**
 * 顏色模式圖標組件
 * 根據當前主題顯示太陽或月亮圖標
 *
 * @returns 對應當前主題的圖標元素
 */
export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

/**
 * 顏色模式按鈕的屬性介面
 * 排除 aria-label 屬性，因為組件內部已定義
 */
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

/**
 * 顏色模式切換按鈕組件
 * 提供一個可點擊的按鈕來切換淺色/深色主題
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
 * 強制淺色模式包裝器組件
 * 將其子元素強制顯示為淺色主題，不受全局主題影響
 *
 * @param props - Span 組件的屬性
 * @param ref - Span 元素的引用
 * @returns 淺色模式包裝器
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
 * 強制深色模式包裝器組件
 * 將其子元素強制顯示為深色主題，不受全局主題影響
 *
 * @param props - Span 組件的屬性
 * @param ref - Span 元素的引用
 * @returns 深色模式包裝器
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
