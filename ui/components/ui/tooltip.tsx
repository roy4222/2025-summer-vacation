"use client";

import { Tooltip as ChakraTooltip, Portal } from "@chakra-ui/react";
import * as React from "react";

/**
 * Tooltip 組件的屬性介面
 * 繼承自 Chakra UI 的 Tooltip.RootProps，並擴展了額外的功能屬性
 */
export interface TooltipProps extends ChakraTooltip.RootProps {
  /** 是否顯示箭頭指示器 */
  showArrow?: boolean;
  /** 是否使用 Portal 渲染（預設為 true），將工具提示渲染到 DOM 頂層 */
  portalled?: boolean;
  /** Portal 的容器引用，指定工具提示渲染的目標容器 */
  portalRef?: React.RefObject<HTMLElement>;
  /** 工具提示的內容，可以是任何 React 節點 */
  content: React.ReactNode;
  /** 傳遞給 Tooltip.Content 的額外屬性 */
  contentProps?: ChakraTooltip.ContentProps;
  /** 是否禁用工具提示，為 true 時直接返回子元素 */
  disabled?: boolean;
}

/**
 * Tooltip 工具提示組件
 * 基於 Chakra UI 的 Tooltip 組件封裝，提供了更靈活的配置選項
 *
 * 功能特點：
 * - 支援條件性禁用
 * - 可選的箭頭指示器
 * - 靈活的 Portal 渲染控制
 * - 自定義容器支援
 * - 完整的 forwardRef 支援
 *
 * @param props - 工具提示的配置屬性
 * @param ref - 轉發的 ref，指向工具提示內容元素
 * @returns 工具提示組件或原始子元素（當禁用時）
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props;

    // 如果禁用工具提示，直接返回子元素
    if (disabled) return children;

    return (
      <ChakraTooltip.Root {...rest}>
        {/* 觸發器：使用 asChild 將觸發行為附加到子元素上 */}
        <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
        {/* Portal：控制是否將工具提示渲染到指定容器或頂層 DOM */}
        <Portal disabled={!portalled} container={portalRef}>
          {/* 定位器：處理工具提示的位置計算和渲染 */}
          <ChakraTooltip.Positioner>
            {/* 工具提示內容容器 */}
            <ChakraTooltip.Content ref={ref} {...contentProps}>
              {/* 條件渲染箭頭指示器 */}
              {showArrow && (
                <ChakraTooltip.Arrow>
                  <ChakraTooltip.ArrowTip />
                </ChakraTooltip.Arrow>
              )}
              {/* 渲染工具提示的實際內容 */}
              {content}
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        </Portal>
      </ChakraTooltip.Root>
    );
  }
);
