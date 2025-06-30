"use client";

// 引入 Chakra UI 組件庫
import {
  Box, // 基礎容器組件
  Button, // 按鈕組件
  Container, // 響應式容器組件
  Flex, // Flexbox 佈局組件
  Grid, // Grid 佈局組件
  Heading, // 標題組件
  Input, // 輸入框組件
  Stack, // 垂直/水平堆疊組件
  Text, // 文字組件
  Card, // 卡片組件
  Badge, // 徽章/標籤組件
  Avatar, // 頭像組件
  Separator, // 分隔線組件
} from "@chakra-ui/react";
// 引入 React Hook
import { useState } from "react";
// 引入自定義導航欄組件
import Header from "@/components/navbar/header";
import Footer from "@/components/navbar/footer";

/**
 * 首頁組件
 * 使用 Chakra UI 建立的響應式首頁，包含個人資訊展示和互動功能
 *
 * 功能特色：
 * - 響應式設計，適配不同螢幕尺寸
 * - 深色/淺色主題切換
 * - 互動式輸入表單
 * - 個人資訊卡片展示
 * - 技能標籤展示
 *
 * @returns 首頁的 JSX 元素
 */
export default function HomePage() {
  // 使用 useState 管理表單輸入狀態
  const [name, setName] = useState(""); // 姓名輸入
  const [email, setEmail] = useState(""); // 電子郵件輸入
  const [message, setMessage] = useState(""); // 訊息內容輸入

  /**
   * 處理表單提交
   * 將表單資料輸出到控制台並重置表單
   */
  const handleSubmit = () => {
    // 輸出表單資料到控制台
    console.log("表單資料:", { name, email, message });
    // 重置所有表單欄位
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    // 主要容器：設定最小高度為視窗高度，背景色為畫布色
    <Box minH="100vh" bg="bg.canvas">
      {/* 頂部導航區域 */}
      <Header />

      {/* 主要內容容器：最大寬度6xl，垂直內邊距8 */}
      <Container maxW="6xl" py={8}>
        {/* 垂直堆疊容器：各區塊間距12 */}
        <Stack gap={12}>
          {/* 英雄區域：主要標題和介紹 */}
          <Box textAlign="center" py={12}>
            {/* 垂直堆疊：頭像、標題、描述、技能標籤 */}
            <Stack gap={6} align="center">
              {/* 大尺寸頭像 */}
              <Avatar.Root size="2xl">
                <Avatar.Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <Avatar.Fallback>使用者</Avatar.Fallback>
              </Avatar.Root>

              {/* 標題和描述文字 */}
              <Stack gap={2} align="center">
                <Heading size="2xl" color="fg.emphasized">
                  歡迎來到我的網站
                </Heading>
                <Text fontSize="xl" color="fg.muted" maxW="2xl">
                  這是一個使用 React + Chakra UI 建立的個人網站，
                  展示了現代化的前端開發技術和響應式設計。
                </Text>
              </Stack>

              {/* 技能標籤展示 */}
              <Flex gap={4} wrap="wrap" justify="center">
                <Badge colorPalette="blue" size="lg">
                  React
                </Badge>
                <Badge colorPalette="teal" size="lg">
                  Chakra UI
                </Badge>
                <Badge colorPalette="purple" size="lg">
                  TypeScript
                </Badge>
              </Flex>
            </Stack>
          </Box>

          {/* 分隔線 */}
          <Separator />

          {/* 主要內容區域：響應式網格佈局 */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            {/* 個人資訊卡片 */}
            <Card.Root
              shadow="lg"
              borderRadius="xl"
              // 懸停效果：向上移動和陰影變化
              _hover={{
                transform: "translateY(-4px)",
                shadow: "xl",
              }}
              transition="all 0.3s ease"
            >
              {/* 卡片標題 */}
              <Card.Header pb={2}>
                <Flex align="center" gap={3}>
                  {/* 裝飾性圓點 */}
                  <Box w={4} h={4} bg="blue.500" borderRadius="full" />
                  <Heading size="lg" color="fg.emphasized">
                    關於我
                  </Heading>
                </Flex>
              </Card.Header>

              {/* 卡片內容 */}
              <Card.Body pt={2}>
                <Stack gap={6} align="start">
                  {/* 個人介紹文字 */}
                  <Text color="fg.muted" fontSize="md" lineHeight="tall">
                    我是一名充滿熱忱的前端開發者，專注於創造優質的數位體驗。
                    擅長將創意想法轉化為實用的網頁應用程式，
                    並持續學習最新的技術趨勢來提升開發效率。
                  </Text>

                  {/* 核心技能區塊 */}
                  <Box w="full">
                    <Text
                      fontWeight="bold"
                      mb={3}
                      color="fg.emphasized"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      核心技能
                    </Text>
                    {/* 技能網格：2列佈局 */}
                    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                      {/* 各個技能項目 */}
                      <Flex align="center" gap={2}>
                        <Box w={2} h={2} bg="blue.400" borderRadius="full" />
                        <Badge colorPalette="blue" variant="subtle">
                          JavaScript
                        </Badge>
                      </Flex>
                      <Flex align="center" gap={2}>
                        <Box w={2} h={2} bg="cyan.400" borderRadius="full" />
                        <Badge colorPalette="cyan" variant="subtle">
                          React
                        </Badge>
                      </Flex>
                      <Flex align="center" gap={2}>
                        <Box w={2} h={2} bg="purple.400" borderRadius="full" />
                        <Badge colorPalette="purple" variant="subtle">
                          TypeScript
                        </Badge>
                      </Flex>
                      <Flex align="center" gap={2}>
                        <Box w={2} h={2} bg="teal.400" borderRadius="full" />
                        <Badge colorPalette="teal" variant="subtle">
                          Chakra UI
                        </Badge>
                      </Flex>
                      <Flex align="center" gap={2}>
                        <Box w={2} h={2} bg="orange.400" borderRadius="full" />
                        <Badge colorPalette="orange" variant="subtle">
                          Next.js
                        </Badge>
                      </Flex>
                      <Flex align="center" gap={2}>
                        <Box w={2} h={2} bg="green.400" borderRadius="full" />
                        <Badge colorPalette="green" variant="subtle">
                          Node.js
                        </Badge>
                      </Flex>
                    </Grid>
                  </Box>

                  {/* 興趣愛好區塊 */}
                  <Box w="full">
                    <Text
                      fontWeight="bold"
                      mb={3}
                      color="fg.emphasized"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      興趣愛好
                    </Text>
                    {/* 興趣標籤：彈性換行佈局 */}
                    <Flex wrap="wrap" gap={2}>
                      <Badge colorPalette="pink" variant="outline">
                        🎨 設計
                      </Badge>
                      <Badge colorPalette="yellow" variant="outline">
                        📚 閱讀
                      </Badge>
                      <Badge colorPalette="red" variant="outline">
                        🎵 音樂
                      </Badge>
                      <Badge colorPalette="indigo" variant="outline">
                        🏃‍♂️ 運動
                      </Badge>
                    </Flex>
                  </Box>
                </Stack>
              </Card.Body>
            </Card.Root>

            {/* 聯絡表單卡片 */}
            <Card.Root
              shadow="lg"
              borderRadius="xl"
              // 懸停效果：向上移動和陰影變化
              _hover={{
                transform: "translateY(-4px)",
                shadow: "xl",
              }}
              transition="all 0.3s ease"
            >
              {/* 表單標題 */}
              <Card.Header pb={2}>
                <Flex align="center" gap={3}>
                  {/* 裝飾性圓點 */}
                  <Box w={4} h={4} bg="green.500" borderRadius="full" />
                  <Heading size="lg" color="fg.emphasized">
                    聯絡我
                  </Heading>
                </Flex>
                <Text color="fg.muted" fontSize="sm" mt={1}>
                  有任何問題或合作機會，歡迎與我聯繫
                </Text>
              </Card.Header>

              {/* 表單內容 */}
              <Card.Body pt={2}>
                <Stack gap={5}>
                  {/* 姓名輸入欄位 */}
                  <Box>
                    <Text
                      mb={2}
                      fontWeight="semibold"
                      color="fg.emphasized"
                      fontSize="sm"
                    >
                      姓名 *
                    </Text>
                    <Input
                      placeholder="請輸入您的姓名"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      borderRadius="lg"
                      // 焦點樣式
                      _focus={{
                        borderColor: "blue.500",
                        shadow: "0 0 0 1px var(--chakra-colors-blue-500)",
                      }}
                    />
                  </Box>

                  {/* 電子郵件輸入欄位 */}
                  <Box>
                    <Text
                      mb={2}
                      fontWeight="semibold"
                      color="fg.emphasized"
                      fontSize="sm"
                    >
                      電子郵件 *
                    </Text>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      borderRadius="lg"
                      _focus={{
                        borderColor: "blue.500",
                        shadow: "0 0 0 1px var(--chakra-colors-blue-500)",
                      }}
                    />
                  </Box>

                  {/* 訊息輸入欄位 */}
                  <Box>
                    <Text
                      mb={2}
                      fontWeight="semibold"
                      color="fg.emphasized"
                      fontSize="sm"
                    >
                      訊息 *
                    </Text>
                    <Input
                      placeholder="請輸入您想說的話..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      borderRadius="lg"
                      _focus={{
                        borderColor: "blue.500",
                        shadow: "0 0 0 1px var(--chakra-colors-blue-500)",
                      }}
                    />
                  </Box>

                  {/* 提交按鈕 */}
                  <Button
                    colorPalette="blue"
                    size="lg"
                    onClick={handleSubmit}
                    // 當任一欄位為空時禁用按鈕
                    disabled={!name || !email || !message}
                    borderRadius="lg"
                    // 懸停效果
                    _hover={{
                      transform: "translateY(-1px)",
                      shadow: "lg",
                    }}
                    // 禁用狀態樣式
                    _disabled={{
                      opacity: 0.6,
                      cursor: "not-allowed",
                      _hover: {
                        transform: "none",
                        shadow: "none",
                      },
                    }}
                    transition="all 0.2s"
                  >
                    📧 送出訊息
                  </Button>
                </Stack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* 專案展示區域 */}
          <Box>
            {/* 專案區塊標題 */}
            <Stack gap={2} align="center" mb={8}>
              <Heading
                size="2xl"
                textAlign="center"
                color="fg.emphasized"
                fontWeight="bold"
              >
                精選專案
              </Heading>
              <Text
                color="fg.muted"
                textAlign="center"
                maxW="2xl"
                fontSize="lg"
              >
                以下是我近期完成的一些專案，展示了不同的技術應用和創意實現
              </Text>
            </Stack>

            {/* 專案網格：響應式佈局 */}
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={8}
            >
              {/* 專案資料陣列，使用 map 渲染 */}
              {[
                {
                  id: 1,
                  title: "電商購物平台",
                  description:
                    "一個功能完整的電商網站，包含商品展示、購物車、結帳流程等核心功能。使用 React 和 Node.js 開發，提供流暢的購物體驗。",
                  tags: ["React", "Node.js", "MongoDB"],
                  color: "blue",
                },
                {
                  id: 2,
                  title: "任務管理系統",
                  description:
                    "協助團隊管理專案進度的工具，支援任務分配、進度追蹤、團隊協作等功能。採用現代化的 UI 設計和響應式佈局。",
                  tags: ["Vue.js", "Express", "MySQL"],
                  color: "green",
                },
                {
                  id: 3,
                  title: "個人部落格",
                  description:
                    "使用 Next.js 建立的靜態部落格網站，支援 Markdown 文章撰寫、標籤分類、搜尋功能，並具備優秀的 SEO 表現。",
                  tags: ["Next.js", "Markdown", "Vercel"],
                  color: "purple",
                },
              ].map((project) => (
                // 專案卡片
                <Card.Root
                  key={project.id}
                  shadow="lg"
                  borderRadius="xl"
                  // 懸停效果：更明顯的向上移動
                  _hover={{
                    transform: "translateY(-6px)",
                    shadow: "2xl",
                  }}
                  transition="all 0.3s ease"
                  overflow="hidden"
                >
                  {/* 卡片頂部顏色條 */}
                  <Box
                    h={3}
                    bg={`${project.color}.500`}
                    bgGradient={`linear(to-r, ${project.color}.400, ${project.color}.600)`}
                  />

                  {/* 專案內容 */}
                  <Card.Body p={6}>
                    <Stack gap={4} align="start" h="full">
                      {/* 專案標題 */}
                      <Flex align="center" gap={3}>
                        <Box
                          w={3}
                          h={3}
                          bg={`${project.color}.500`}
                          borderRadius="full"
                        />
                        <Heading size="md" color="fg.emphasized">
                          {project.title}
                        </Heading>
                      </Flex>

                      {/* 專案描述 */}
                      <Text
                        color="fg.muted"
                        fontSize="sm"
                        lineHeight="tall"
                        flex="1"
                      >
                        {project.description}
                      </Text>

                      {/* 技術棧標籤 */}
                      <Box w="full">
                        <Text
                          fontSize="xs"
                          fontWeight="semibold"
                          color="fg.muted"
                          mb={2}
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          技術棧
                        </Text>
                        <Flex wrap="wrap" gap={2}>
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              colorPalette={project.color}
                              variant="subtle"
                              size="sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </Flex>
                      </Box>

                      {/* 專案操作按鈕 */}
                      <Flex gap={2} w="full" pt={2}>
                        <Button
                          variant="outline"
                          size="sm"
                          colorPalette={project.color}
                          flex="1"
                          borderRadius="lg"
                          _hover={{
                            bg: `${project.color}.50`,
                            transform: "translateY(-1px)",
                          }}
                          transition="all 0.2s"
                        >
                          🔗 查看專案
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          colorPalette={project.color}
                          flex="1"
                          borderRadius="lg"
                          _hover={{
                            bg: `${project.color}.50`,
                            transform: "translateY(-1px)",
                          }}
                          transition="all 0.2s"
                        >
                          📝 原始碼
                        </Button>
                      </Flex>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}
