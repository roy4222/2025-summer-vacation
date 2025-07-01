"use client";

import { HStack, Box, Text } from "@chakra-ui/react";
import { useColorModeValue, ColorModeButton } from "../color-mode";

/**
 * Header 組件
 * 頂部導航欄頭部區域組件，包含主題切換按鈕和用戶頭像
 *
 * 功能特色：
 * - 主題切換按鈕（深色/淺色模式）
 * - 圓形用戶頭像顯示
 * - 響應式懸停效果
 * - 平滑過渡動畫
 *
 * @returns Header 組件的 JSX 元素
 */
export function Header() {
  // 根據當前主題模式設定懸停背景顏色
  const hoverBg = useColorModeValue("gray.50", "gray.600");
  
  return (
    <HStack gap={4}>
      {/* 主題切換按鈕 */}
      <ColorModeButton 
        variant="ghost" 
        size="md" 
        _hover={{ bg: hoverBg }} 
      />
      
      {/* 用戶頭像 */}
      <Box
        w={8}
        h={8}
        bg="teal.500"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{ bg: "teal.600" }}
        transition="background 0.2s"
      >
        <Text color="white" fontSize="sm" fontWeight="bold">
          羅傑
        </Text>
      </Box>
    </HStack>
  );
}
