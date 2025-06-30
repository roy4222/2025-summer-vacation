"use client"

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  Card,
  Badge,
  Avatar,
  Separator,
} from "@chakra-ui/react"
import { useState } from "react"
import Header from "@/components/navbar/header"

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
  // 使用 useState 管理輸入狀態
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  /**
   * 處理表單提交
   * 將表單資料輸出到控制台並重置表單
   */
  const handleSubmit = () => {
    console.log("表單資料:", { name, email, message })
    // 重置表單
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Box minH="100vh" bg="bg.canvas">
      {/* 頂部導航區域 */}
      <Header />

      <Container maxW="6xl" py={8}>
        <Stack gap={12}>
          {/* 英雄區域 */}
          <Box textAlign="center" py={12}>
            <Stack gap={6} align="center">
              <Avatar.Root size="2xl">
                <Avatar.Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <Avatar.Fallback>使用者</Avatar.Fallback>
              </Avatar.Root>
              <Stack gap={2} align="center">
                <Heading size="2xl" color="fg.emphasized">
                  歡迎來到我的網站
                </Heading>
                <Text fontSize="xl" color="fg.muted" maxW="2xl">
                  這是一個使用 React + Chakra UI 建立的個人網站，
                  展示了現代化的前端開發技術和響應式設計。
                </Text>
              </Stack>
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

          <Separator />

          {/* 主要內容區域 */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            {/* 個人資訊卡片 */}
            <Card.Root>
              <Card.Header>
                <Heading size="lg">關於我</Heading>
              </Card.Header>
              <Card.Body>
                <Stack gap={4} align="start">
                  <Text color="fg.muted">
                    我是一名前端開發者，專注於使用現代化的技術棧建立優質的用戶體驗。
                    熱愛學習新技術，並將其應用到實際專案中。
                  </Text>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>
                      技能領域：
                    </Text>
                    <Flex wrap="wrap" gap={2}>
                      <Badge colorPalette="blue">JavaScript</Badge>
                      <Badge colorPalette="green">React</Badge>
                      <Badge colorPalette="purple">TypeScript</Badge>
                      <Badge colorPalette="teal">Chakra UI</Badge>
                      <Badge colorPalette="orange">Next.js</Badge>
                    </Flex>
                  </Box>
                </Stack>
              </Card.Body>
            </Card.Root>

            {/* 聯絡表單 */}
            <Card.Root>
              <Card.Header>
                <Heading size="lg">聯絡我</Heading>
              </Card.Header>
              <Card.Body>
                <Stack gap={4}>
                  <Box>
                    <Text mb={2} fontWeight="medium">
                      姓名
                    </Text>
                    <Input
                      placeholder="請輸入您的姓名"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontWeight="medium">
                      電子郵件
                    </Text>
                    <Input
                      type="email"
                      placeholder="請輸入您的電子郵件"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontWeight="medium">
                      訊息
                    </Text>
                    <Input
                      placeholder="請輸入您的訊息"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Box>
                  <Button
                    colorPalette="blue"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!name || !email || !message}
                  >
                    送出訊息
                  </Button>
                </Stack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* 專案展示區域 */}
          <Box>
            <Heading size="xl" mb={6} textAlign="center">
              我的專案
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={6}
            >
              {[1, 2, 3].map((project) => (
                <Card.Root key={project}>
                  <Card.Body>
                    <Stack gap={3} align="start">
                      <Heading size="md">專案 {project}</Heading>
                      <Text color="fg.muted">
                        這是一個使用現代化技術棧開發的專案，
                        展示了優秀的用戶體驗和程式碼品質。
                      </Text>
                      <Flex gap={2}>
                        <Badge colorPalette="blue">React</Badge>
                        <Badge colorPalette="green">Node.js</Badge>
                      </Flex>
                      <Button variant="outline" size="sm">
                        查看詳情
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>

      {/* 頁腳 */}
      <Box
        as="footer"
        mt={16}
        py={8}
        borderTop="1px"
        borderColor="border.subtle"
        textAlign="center"
      >
        <Text color="fg.muted">
          © 2024 我的個人網站. 使用 React + Chakra UI 建立
        </Text>
      </Box>
    </Box>
  )
}

