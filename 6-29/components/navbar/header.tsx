"use client";

import { Flex, Heading, Button, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

/**
 * Header 組件
 * 頂部導航欄組件，包含網站標題、主題切換按鈕和登入按鈕
 *
 * 功能特色：
 * - 固定在頂部的導航欄
 * - 響應式設計
 * - 毛玻璃效果背景
 * - 主題切換功能
 * - 懸停動畫效果
 *
 * @returns Header 組件的 JSX 元素
 */
export default function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px={8}
      py={6}
      borderBottom="1px"
      borderColor="border.subtle"
      bg="bg.surface"
      backdropFilter="blur(10px)"
      position="sticky"
      top={0}
      zIndex={10}
      shadow="sm"
    >
      <Heading
        size="xl"
        color="fg.emphasized"
        fontWeight="bold"
        letterSpacing="tight"
      >
        我的個人網站
      </Heading>
      <Spacer />
      <Flex align="center" gap={4}>
        <ColorModeButton
          variant="ghost"
          size="md"
          _hover={{ bg: "bg.muted" }}
        />
        <Button
          colorPalette="blue"
          variant="solid"
          size="md"
          px={6}
          borderRadius="full"
          fontWeight="semibold"
          _hover={{
            transform: "translateY(-1px)",
            shadow: "md",
          }}
          transition="all 0.2s"
        >
          登入
        </Button>
      </Flex>
    </Flex>
  );
}
