"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

/**
 * Footer 組件
 * 網站底部組件，包含聯絡資訊、社群媒體連結和版權資訊
 *
 * 功能特色：
 * - 響應式設計的底部導航
 * - 社群媒體連結按鈕
 * - 版權資訊顯示
 * - 漸層色彩和懸停效果
 * - 居中對齊的內容佈局
 *
 * @returns Footer 組件的 JSX 元素
 */
export default function Footer() {
  return (
    <Box
      as="footer"
      mt={20}
      py={12}
      borderTop="1px"
      borderColor="border.subtle"
      bg="bg.subtle"
    >
      {/* 主容器，設定最大寬度和響應式佈局 */}
      <Container maxW="6xl">
        {/* 垂直堆疊容器，包含所有頁腳內容 */}
        <Stack gap={8} align="center">
          {/* 頁腳標題和描述區塊 */}
          <Stack gap={4} align="center">
            {/* 主標題：邀請合作的標題 */}
            <Heading size="lg" color="fg.emphasized">
              讓我們一起創造美好的數位體驗
            </Heading>
            {/* 描述文字：介紹聯絡方式和合作意願 */}
            <Text color="fg.muted" textAlign="center" maxW="md">
              如果您對我的工作感興趣，或有任何合作機會，
              歡迎隨時與我聯繫。期待與您的交流！
            </Text>
          </Stack>

          {/* 社群媒體連結按鈕區塊 */}
          <Flex gap={4} wrap="wrap" justify="center">
            {/* Email 聯絡按鈕 */}
            <Button
              variant="ghost"
              size="sm"
              colorPalette="blue"
              _hover={{ bg: "blue.50" }}
            >
              📧 Email
            </Button>
            {/* LinkedIn 專業社群按鈕 */}
            <Button
              variant="ghost"
              size="sm"
              colorPalette="purple"
              _hover={{ bg: "purple.50" }}
            >
              💼 LinkedIn
            </Button>
            {/* GitHub 程式碼庫按鈕 */}
            <Button
              variant="ghost"
              size="sm"
              colorPalette="gray"
              _hover={{ bg: "gray.50" }}
            >
              🐙 GitHub
            </Button>
          </Flex>

          {/* 版權資訊和技術說明 */}
          <Text color="fg.muted" fontSize="sm" textAlign="center">
            © 2024 我的個人網站 • 使用 ❤️ 和 React + Chakra UI 精心打造
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
