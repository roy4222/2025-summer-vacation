'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
  Badge,
  Flex,
  Icon,
  Progress,
  Input,
  Checkbox,
  Switch,
  Alert,
  Spinner
} from '@chakra-ui/react';
import { ColorModeButton } from '../components/ui/color-mode';
import { LuCode, LuPalette, LuZap, LuShield, LuStar, LuHeart, LuCheck, LuGithub, LuExternalLink } from 'react-icons/lu';

/**
 * Chakra UI 展示首頁
 * 
 * 展示 Chakra UI 組件庫的美觀首頁，包含：
 * - 英雄區域介紹
 * - 組件展示區域
 * - 功能特點說明
 * 
 * @returns {JSX.Element} 首頁頁面組件
 */
export default function Home() {
  console.log('渲染 Chakra UI 展示首頁');
  
  return (
    <Box minH="100vh" bg="bg.canvas">
      {/* 頂部導航 */}
      <Box bg="bg.surface" borderBottom="1px" borderColor="border.subtle" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="lg" color="blue.500">Chakra UI 展示</Heading>
            <Flex gap={4} align="center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://chakra-ui.com" target="_blank" rel="noopener noreferrer">
                  <Icon mr={2}><LuExternalLink /></Icon>
                  官方文檔
                </a>
              </Button>
              <ColorModeButton />
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* 英雄區域 */}
      <Box 
        bgGradient="to-r"
        gradientFrom="blue.500"
        gradientTo="purple.600"
        py={20} 
        color="white"
        position="relative"
      >
        {/* 背景覆蓋層確保文字可讀性 */}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.200"
          zIndex={0}
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Stack gap={8} align="center" textAlign="center">
            <Badge 
              colorPalette="green" 
              variant="solid" 
              size="lg" 
              px={4} 
              py={2}
              shadow="lg"
            >
              🚀 現代化 UI 組件庫
            </Badge>
            
            <Heading 
              as="h1" 
              size="4xl" 
              lineHeight="1.1"
              maxW="800px"
              color="white"
              textShadow="0 2px 4px rgba(0,0,0,0.3)"
            >
              用 Chakra UI 建構
              <Text as="span" color="yellow.200" textShadow="0 2px 4px rgba(0,0,0,0.5)"> 美麗的應用程式</Text>
            </Heading>
            
            <Text 
              fontSize="xl" 
              maxW="600px"
              color="whiteAlpha.900"
              lineHeight="1.6"
              textShadow="0 1px 2px rgba(0,0,0,0.3)"
            >
              簡單、模組化且可存取的組件庫，讓您可以快速建構 React 應用程式。
              支援暗色模式、完全可定制、並遵循 WAI-ARIA 標準。
            </Text>
            
            <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
              <Button 
                size="lg" 
                bg="white" 
                color="blue.600" 
                _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
                shadow="lg"
                px={8}
                transition="all 0.3s"
              >
                <Icon mr={2}><LuCode /></Icon>
                開始使用
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                borderColor="white" 
                color="white"
                bg="whiteAlpha.100"
                _hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-2px)' }}
                shadow="lg"
                px={8}
                transition="all 0.3s"
              >
                <Icon mr={2}><LuGithub /></Icon>
                查看原始碼
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* 特色功能 */}
      <Box py={20} bg="bg.canvas">
        <Container maxW="container.xl">
          <Stack gap={16}>
            <Box textAlign="center">
              <Heading size="2xl" mb={4} color="fg">為什麼選擇 Chakra UI？</Heading>
              <Text fontSize="lg" color="fg.muted" maxW="600px" mx="auto">
                強大的功能組合，讓開發變得簡單而愉快
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
              <Box bg="bg.surface" p={6} borderRadius="lg" textAlign="center" _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }} transition="all 0.3s" borderWidth="1px" borderColor="border.subtle" shadow="md">
                <Stack gap={4} align="center">
                  <Box p={3} bg="blue.100" borderRadius="full">
                    <Icon color="blue.600" boxSize={6}><LuZap /></Icon>
                  </Box>
                  <Heading size="md" color="fg">快速開發</Heading>
                  <Text color="fg.muted" textAlign="center">
                    預製組件讓您專注於業務邏輯，而不是樣式細節
                  </Text>
                </Stack>
              </Box>

              <Box bg="bg.surface" p={6} borderRadius="lg" textAlign="center" _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }} transition="all 0.3s" borderWidth="1px" borderColor="border.subtle" shadow="md">
                <Stack gap={4} align="center">
                  <Box p={3} bg="purple.100" borderRadius="full">
                    <Icon color="purple.600" boxSize={6}><LuPalette /></Icon>
                  </Box>
                  <Heading size="md" color="fg">主題系統</Heading>
                  <Text color="fg.muted" textAlign="center">
                    強大的主題系統支援暗色模式和完全自定義
                  </Text>
                </Stack>
              </Box>

              <Box bg="bg.surface" p={6} borderRadius="lg" textAlign="center" _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }} transition="all 0.3s" borderWidth="1px" borderColor="border.subtle" shadow="md">
                <Stack gap={4} align="center">
                  <Box p={3} bg="green.100" borderRadius="full">
                    <Icon color="green.600" boxSize={6}><LuShield /></Icon>
                  </Box>
                  <Heading size="md" color="fg">無障礙設計</Heading>
                  <Text color="fg.muted" textAlign="center">
                    遵循 WAI-ARIA 標準，確保所有用戶都能使用
                  </Text>
                </Stack>
              </Box>

              <Box bg="bg.surface" p={6} borderRadius="lg" textAlign="center" _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }} transition="all 0.3s" borderWidth="1px" borderColor="border.subtle" shadow="md">
                <Stack gap={4} align="center">
                  <Box p={3} bg="orange.100" borderRadius="full">
                    <Icon color="orange.600" boxSize={6}><LuStar /></Icon>
                  </Box>
                  <Heading size="md" color="fg">開源社群</Heading>
                  <Text color="fg.muted" textAlign="center">
                    活躍的開源社群，持續更新和改進
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* 組件展示區域 */}
      <Box py={20} bg="bg.subtle">
        <Container maxW="container.xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size="2xl" mb={4} color="fg">豐富的組件庫</Heading>
              <Text fontSize="lg" color="fg.muted">
                50+ 個精心設計的組件，滿足您的所有需求
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {/* 按鈕組件示例 */}
              <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" borderColor="border.subtle">
                <Stack gap={4}>
                  <Heading size="md">按鈕組件</Heading>
                  <Stack gap={3}>
                    <Button colorPalette="blue" variant="solid">實心按鈕</Button>
                    <Button colorPalette="green" variant="outline">輪廓按鈕</Button>
                    <Button colorPalette="purple" variant="ghost">幽靈按鈕</Button>
                  </Stack>
                </Stack>
              </Box>

              {/* 表單組件示例 */}
              <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" borderColor="border.subtle">
                <Stack gap={4}>
                  <Heading size="md">表單組件</Heading>
                  <Stack gap={3}>
                    <Input placeholder="請輸入文字" />
                    <Flex gap={4}>
                      <Checkbox.Root defaultChecked>
                        <Checkbox.Control>
                          <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Label>核取方塊</Checkbox.Label>
                      </Checkbox.Root>
                      <Switch.Root defaultChecked>
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                        <Switch.Label>開關</Switch.Label>
                      </Switch.Root>
                    </Flex>
                  </Stack>
                </Stack>
              </Box>

              {/* 反饋組件示例 */}
              <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" borderColor="border.subtle">
                <Stack gap={4}>
                  <Heading size="md">反饋組件</Heading>
                  <Stack gap={3}>
                    <Alert.Root status="info">
                      <Alert.Indicator />
                      <Alert.Title>資訊提示</Alert.Title>
                    </Alert.Root>
                    <Progress.Root value={65} size="sm">
                      <Progress.Track>
                        <Progress.Range />
                      </Progress.Track>
                    </Progress.Root>
                    <Flex align="center" gap={2}>
                      <Spinner size="sm" />
                      <Text fontSize="sm">載入中...</Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Box>

              {/* 徽章示例 */}
              <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" borderColor="border.subtle">
                <Stack gap={4}>
                  <Heading size="md">徽章標籤</Heading>
                  <Flex gap={2} wrap="wrap">
                    <Badge colorPalette="blue">新功能</Badge>
                    <Badge colorPalette="green">穩定版</Badge>
                    <Badge colorPalette="red">已棄用</Badge>
                    <Badge colorPalette="purple" variant="solid">推薦</Badge>
                  </Flex>
                </Stack>
              </Box>

              {/* 顏色示例 */}
              <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" borderColor="border.subtle">
                <Stack gap={4}>
                  <Heading size="md">色彩系統</Heading>
                  <Stack gap={2}>
                    <Text color="fg">主要文字顏色</Text>
                    <Text color="fg.muted">次要文字顏色</Text>
                    <Text color="blue.500">藍色文字</Text>
                    <Text color="green.600">綠色文字</Text>
                  </Stack>
                </Stack>
              </Box>

              {/* 響應式示例 */}
              <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" borderColor="border.subtle">
                <Stack gap={4}>
                  <Heading size="md">響應式設計</Heading>
                  <Text color="fg.muted" fontSize="sm">
                    所有組件都支援響應式斷點，自動適應不同螢幕尺寸
                  </Text>
                  <Button size={{ base: 'sm', md: 'md' }} colorPalette="teal">
                    響應式按鈕
                  </Button>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* 統計數據 */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} textAlign="center">
            <Stack gap={2}>
              <Heading size="2xl" color="blue.500">50+</Heading>
              <Text color="fg.muted">組件數量</Text>
            </Stack>
            <Stack gap={2}>
              <Heading size="2xl" color="green.500">100K+</Heading>
              <Text color="fg.muted">每週下載</Text>
            </Stack>
            <Stack gap={2}>
              <Heading size="2xl" color="purple.500">30K+</Heading>
              <Text color="fg.muted">GitHub Stars</Text>
            </Stack>
            <Stack gap={2}>
              <Heading size="2xl" color="orange.500">5K+</Heading>
              <Text color="fg.muted">開發者使用</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* 頁尾 */}
      <Box bg="bg.surface" py={12} borderTop="1px" borderColor="border.subtle">
        <Container maxW="container.xl">
          <Stack gap={8} align="center" textAlign="center">
            <Heading size="lg" color="blue.500">開始您的 Chakra UI 之旅</Heading>
            <Text color="fg.muted" maxW="500px">
              加入數千名開發者，使用 Chakra UI 建構出色的應用程式
            </Text>
            <Button colorPalette="blue" size="lg" px={8}>
              <Icon mr={2}><LuCheck /></Icon>
              立即開始
            </Button>
            <Box w="200px" h="1px" bg="border.subtle" />
            <Text fontSize="sm" color="fg.muted">
              © 2024 Chakra UI 展示頁面. 使用 ❤️ 和 Chakra UI 製作
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
