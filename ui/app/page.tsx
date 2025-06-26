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
  Spinner,
  Link,
  Image,
  VStack,
  HStack,
  IconButton,
  Separator
} from '@chakra-ui/react';
import { ColorModeButton } from '../components/ui/color-mode';
import { 
  LuCode, 
  LuPalette, 
  LuZap, 
  LuShield, 
  LuStar, 
  LuHeart, 
  LuCheck, 
  LuGithub, 
  LuExternalLink,
  LuMenu,
  LuX,
  LuInfo,
  LuMail,
  LuBookOpen,
  LuDownload,
  LuPlay,
  LuArrowRight,
  LuUsers,
  LuTarget,
  LuLayers,
  LuTwitter,
  LuLinkedin,
  LuInstagram,
  LuFacebook
} from 'react-icons/lu';
import { useState } from 'react';

/**
 * 現代化 Chakra UI 展示首頁
 * 
 * 創建一個美觀的響應式網站，包含：
 * - 現代化頂部導航欄
 * - 吸引人的主視覺區域
 * - 功能特色卡片展示
 * - 完整的頁腳區域
 * 
 * @returns {JSX.Element} 首頁頁面組件
 */
export default function Home() {
  console.log('渲染現代化 Chakra UI 展示首頁');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Box minH="100vh" bg="bg.canvas">
      {/* 頂部導航欄 */}
      <Box 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        bg="bg.surface" 
        borderBottom="1px" 
        borderColor="border.subtle" 
        zIndex={1000}
        backdropFilter="blur(10px)"
        shadow="sm"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" py={4}>
            {/* 品牌 Logo */}
            <Flex align="center" gap={3}>
              <Box 
                w={10} 
                h={10} 
                bg="blue.500" 
                borderRadius="lg" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Icon color="white" boxSize={6}>
                  <LuLayers />
                </Icon>
              </Box>
              <Heading size="lg" color="blue.500" fontWeight="bold">
                Chakra UI
              </Heading>
            </Flex>
            
            {/* 桌面導航連結 */}
            <Flex gap={8} align="center" display={{ base: 'none', md: 'flex' }}>
              <Link href="#home" fontWeight="medium" _hover={{ color: 'blue.500' }}>
                首頁
              </Link>
              <Link href="#features" fontWeight="medium" _hover={{ color: 'blue.500' }}>
                功能
              </Link>
              <Link href="#components" fontWeight="medium" _hover={{ color: 'blue.500' }}>
                組件
              </Link>
              <Link href="#about" fontWeight="medium" _hover={{ color: 'blue.500' }}>
                關於
              </Link>
              <Link href="#contact" fontWeight="medium" _hover={{ color: 'blue.500' }}>
                聯絡
              </Link>
            </Flex>
            
            {/* 右側按鈕 */}
            <Flex gap={3} align="center">
              <ColorModeButton />
              <Button 
                colorPalette="blue" 
                size="sm" 
                display={{ base: 'none', md: 'flex' }}
                _hover={{ transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                開始使用
              </Button>
              
              {/* 手機菜單按鈕 */}
              <IconButton
                aria-label="開啟菜單"
                display={{ base: 'flex', md: 'none' }}
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon>{isMenuOpen ? <LuX /> : <LuMenu />}</Icon>
              </IconButton>
            </Flex>
          </Flex>
          
          {/* 手機導航菜單 */}
          {isMenuOpen && (
            <Box 
              display={{ base: 'block', md: 'none' }} 
              pb={4} 
              borderTop="1px" 
              borderColor="border.subtle"
              mt={4}
              pt={4}
            >
              <Stack gap={4}>
                <Link href="#home" fontWeight="medium">首頁</Link>
                <Link href="#features" fontWeight="medium">功能</Link>
                <Link href="#components" fontWeight="medium">組件</Link>
                <Link href="#about" fontWeight="medium">關於</Link>
                <Link href="#contact" fontWeight="medium">聯絡</Link>
                <Button colorPalette="blue" size="sm" w="full">
                  開始使用
                </Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>

      {/* 主視覺區域 */}
      <Box 
        id="home"
        pt={24}
        pb={20}
        bg="blue.500"
        bgImage="linear-gradient(135deg, #3182ce 0%, #9d4edd 100%)"
        color="white"
        position="relative"
        overflow="hidden"
      >
        {/* 背景裝飾 */}
        <Box
          position="absolute"
          top="-50%"
          right="-20%"
          w="500px"
          h="500px"
          bg="whiteAlpha.100"
          borderRadius="full"
          filter="blur(100px)"
        />
        <Box
          position="absolute"
          bottom="-30%"
          left="-10%"
          w="300px"
          h="300px"
          bg="whiteAlpha.100"
          borderRadius="full"
          filter="blur(80px)"
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Flex 
            direction={{ base: 'column', lg: 'row' }} 
            align="center" 
            gap={12}
            minH="90vh"
            py={8}
          >
            {/* 左側內容 */}
            <VStack 
              align={{ base: 'center', lg: 'start' }} 
              gap={8} 
              flex={1}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <Badge 
                colorPalette="orange" 
                variant="solid" 
                size="lg" 
                px={4} 
                py={2}
                borderRadius="full"
                textTransform="none"
                fontSize="sm"
                fontWeight="medium"
              >
                🎨 現代化 React UI 組件庫
              </Badge>
              
              <Heading 
                as="h1" 
                size={{ base: '3xl', md: '4xl', lg: '5xl' }}
                lineHeight="1.1"
                fontWeight="bold"
                color="white"
              >
                用 Chakra UI 建構
                <br />
                <Text as="span" color="orange.300">
                  美麗的應用程式
                </Text>
              </Heading>
              
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                maxW="500px"
                lineHeight="1.6"
                color="white"
                opacity={0.9}
              >
                簡單、模組化且可存取的組件庫，讓您快速建構 React 應用程式。
                支援深淺模式、完全可定制，並遵循 WAI-ARIA 無障礙標準。
              </Text>
              
              <HStack gap={4} direction={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
                <Button 
                  size="lg" 
                  bg="white" 
                  color="blue.600"
                  _hover={{ 
                    bg: 'gray.100', 
                    transform: 'translateY(-2px)',
                    shadow: 'xl'
                  }}
                  shadow="lg"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="semibold"
                  borderRadius="xl"
                  transition="all 0.3s"
                >
                  <Icon mr={3}><LuCode /></Icon>
                  開始使用
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  borderColor="white" 
                  color="white"
                  bg="whiteAlpha.100"
                  _hover={{ 
                    bg: 'whiteAlpha.200', 
                    transform: 'translateY(-2px)',
                    shadow: 'xl'
                  }}
                  shadow="lg"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="semibold"
                  borderRadius="xl"
                  transition="all 0.3s"
                >
                  <Icon mr={3}><LuGithub /></Icon>
                  查看 GitHub
                </Button>
              </HStack>
            </VStack>
            
            {/* 右側機器人圖像區域 */}
            <Box 
              flex={1} 
              display="flex" 
              justifyContent="center" 
              alignItems="center"
              position="relative"
            >
              <Box
                w={{ base: '300px', md: '400px', lg: '500px' }}
                h={{ base: '300px', md: '400px', lg: '500px' }}
                bg="whiteAlpha.300"
                borderRadius="3xl"
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid"
                borderColor="whiteAlpha.400"
                backdropFilter="blur(20px)"
                shadow="2xl"
                _hover={{ transform: 'scale(1.02)' }}
                transition="all 0.3s"
              >
                {/* 機器人頭部 */}
                <Box
                  w="200px"
                  h="240px"
                  bg="linear-gradient(135deg, #ff6b35 0%, #f9844a 50%, #ee7752 100%)"
                  borderRadius="50% 50% 45% 45%"
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow="2xl"
                >
                  {/* 機器人眼睛 */}
                  <Box
                    w="120px"
                    h="40px"
                    bg="black"
                    borderRadius="full"
                    position="relative"
                    top="-20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      w="8px"
                      h="8px"
                      bg="white"
                      borderRadius="full"
                      animation="pulse 2s infinite"
                    />
                  </Box>
                  
                  {/* 機器人身體暗示 */}
                  <Box
                    position="absolute"
                    bottom="-40px"
                    w="150px"
                    h="80px"
                    bg="whiteAlpha.400"
                    borderRadius="lg"
                    border="2px solid"
                    borderColor="whiteAlpha.500"
                    shadow="lg"
                  />
                </Box>
                
                {/* 浮動粒子效果 */}
                <Box
                  position="absolute"
                  top="20%"
                  left="10%"
                  w="12px"
                  h="12px"
                  bg="orange.300"
                  borderRadius="full"
                  animation="float 3s ease-in-out infinite"
                />
                <Box
                  position="absolute"
                  top="60%"
                  right="15%"
                  w="8px"
                  h="8px"
                  bg="yellow.300"
                  borderRadius="full"
                  animation="float 2.5s ease-in-out infinite reverse"
                />
                <Box
                  position="absolute"
                  bottom="30%"
                  left="20%"
                  w="10px"
                  h="10px"
                  bg="red.300"
                  borderRadius="full"
                  animation="float 2s ease-in-out infinite"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
        
        {/* 添加CSS動畫 */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </Box>

      {/* Why Humanoid 區域 */}
      <Box id="features" py={20} bg="bg.subtle">
        <Container maxW="container.xl">
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Badge colorPalette="blue" variant="subtle" size="md" px={4} py={2} borderRadius="full">
                為什麼選擇
              </Badge>
              <Heading size="3xl" color="fg" maxW="600px">
                Chakra UI？
              </Heading>
            </VStack>

            {/* 大型特色卡片 */}
            <Box
              w="full"
              maxW="1000px"
              h={{ base: '400px', md: '500px' }}
              bg="linear-gradient(135deg, #3182ce 0%, #9d4edd 100%)"
              borderRadius="3xl"
              position="relative"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              shadow="2xl"
              _hover={{ transform: 'scale(1.02)' }}
              transition="all 0.3s"
            >
              <Badge
                position="absolute"
                top={6}
                right={6}
                colorPalette="orange"
                variant="solid"
                borderRadius="full"
                px={4}
                py={2}
              >
                核心理念
              </Badge>
              
              <VStack gap={6} textAlign="center" px={8}>
                <Heading size="2xl" lineHeight="1.2">
                  簡單、模組化且
                  <br />
                  <Text as="span" color="orange.200">
                    完全可存取
                  </Text>
                </Heading>
                <Text fontSize="lg" maxW="600px" color="whiteAlpha.900">
                  Chakra UI 提供一套精心設計的 React 組件，讓開發者能夠快速建構美觀、
                  響應式且無障礙的使用者介面。每個組件都遵循設計系統原則。
                </Text>
              </VStack>
              
              {/* 背景裝飾 */}
              <Box
                position="absolute"
                bottom="-20%"
                right="-10%"
                w="300px"
                h="300px"
                bg="whiteAlpha.100"
                borderRadius="full"
                filter="blur(100px)"
              />
            </Box>

            {/* 功能特色網格 */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
              <Box 
                bg="bg.surface" 
                p={8} 
                borderRadius="xl" 
                textAlign="center" 
                _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }} 
                transition="all 0.3s" 
                border="1px solid" 
                borderColor="border.subtle"
                shadow="lg"
              >
                <VStack gap={4}>
                  <Box p={4} bg="blue.100" borderRadius="full">
                    <Icon color="blue.600" boxSize={8}><LuZap /></Icon>
                  </Box>
                  <Heading size="md" color="fg">快速開發</Heading>
                  <Text color="fg.muted" textAlign="center" fontSize="sm">
                    預製的組件和工具讓您專注於業務邏輯，
                    而不是重複的樣式編寫
                  </Text>
                </VStack>
              </Box>

              <Box 
                bg="bg.surface" 
                p={8} 
                borderRadius="xl" 
                textAlign="center" 
                _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }} 
                transition="all 0.3s" 
                border="1px solid" 
                borderColor="border.subtle"
                shadow="lg"
              >
                <VStack gap={4}>
                  <Box p={4} bg="purple.100" borderRadius="full">
                    <Icon color="purple.600" boxSize={8}><LuPalette /></Icon>
                  </Box>
                  <Heading size="md" color="fg">設計系統</Heading>
                  <Text color="fg.muted" textAlign="center" fontSize="sm">
                    統一的設計語言和主題系統，
                    支援深淺模式和完全客製化
                  </Text>
                </VStack>
              </Box>

              <Box 
                bg="bg.surface" 
                p={8} 
                borderRadius="xl" 
                textAlign="center" 
                _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }} 
                transition="all 0.3s" 
                border="1px solid" 
                borderColor="border.subtle"
                shadow="lg"
              >
                <VStack gap={4}>
                  <Box p={4} bg="green.100" borderRadius="full">
                    <Icon color="green.600" boxSize={8}><LuShield /></Icon>
                  </Box>
                  <Heading size="md" color="fg">無障礙設計</Heading>
                  <Text color="fg.muted" textAlign="center" fontSize="sm">
                    內建 ARIA 支援和鍵盤導航，
                    確保所有使用者都能正常使用
                  </Text>
                </VStack>
              </Box>

              <Box 
                bg="bg.surface" 
                p={8} 
                borderRadius="xl" 
                textAlign="center" 
                _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }} 
                transition="all 0.3s" 
                border="1px solid" 
                borderColor="border.subtle"
                shadow="lg"
              >
                <VStack gap={4}>
                  <Box p={4} bg="orange.100" borderRadius="full">
                    <Icon color="orange.600" boxSize={8}><LuStar /></Icon>
                  </Box>
                  <Heading size="md" color="fg">開源社群</Heading>
                  <Text color="fg.muted" textAlign="center" fontSize="sm">
                    活躍的開源社群支持，
                    持續更新和豐富的生態系統
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* 組件展示區域 */}
      <Box id="components" py={20}>
        <Container maxW="container.xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="3xl" color="fg">強大的組件生態</Heading>
              <Text fontSize="lg" color="fg.muted" maxW="600px">
                50+ 個精心設計的組件，涵蓋所有常見使用場景，
                讓您能夠快速建構專業級應用程式
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
              {/* 互動組件 */}
              <Box bg="bg.surface" p={6} borderRadius="xl" border="1px solid" borderColor="border.subtle" shadow="md">
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">互動組件</Heading>
                  <VStack gap={3} w="full" align="start">
                    <Button colorPalette="blue" variant="solid" size="sm" w="full">
                      主要按鈕
                    </Button>
                    <Button colorPalette="green" variant="outline" size="sm" w="full">
                      次要按鈕
                    </Button>
                    <Button colorPalette="purple" variant="ghost" size="sm" w="full">
                      文字按鈕
                    </Button>
                  </VStack>
                </VStack>
              </Box>

              {/* 表單組件 */}
              <Box bg="bg.surface" p={6} borderRadius="xl" border="1px solid" borderColor="border.subtle" shadow="md">
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">表單組件</Heading>
                  <VStack gap={3} w="full" align="start">
                    <Input placeholder="輸入您的名稱" size="sm" />
                    <HStack w="full" justify="space-between">
                      <Checkbox.Root defaultChecked size="sm">
                        <Checkbox.Control>
                          <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Label>記住我</Checkbox.Label>
                      </Checkbox.Root>
                      <Switch.Root defaultChecked size="sm">
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                        <Switch.Label>通知</Switch.Label>
                      </Switch.Root>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>

              {/* 回饋組件 */}
              <Box bg="bg.surface" p={6} borderRadius="xl" border="1px solid" borderColor="border.subtle" shadow="md">
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">回饋組件</Heading>
                  <VStack gap={3} w="full" align="start">
                    <Alert.Root status="success" size="sm">
                      <Alert.Indicator />
                      <Alert.Title>操作成功</Alert.Title>
                    </Alert.Root>
                    <Progress.Root value={75} size="sm" w="full">
                      <Progress.Track>
                        <Progress.Range />
                      </Progress.Track>
                    </Progress.Root>
                    <HStack>
                      <Spinner size="sm" />
                      <Text fontSize="sm">處理中...</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>

              {/* 佈局組件 */}
              <Box bg="bg.surface" p={6} borderRadius="xl" border="1px solid" borderColor="border.subtle" shadow="md">
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">佈局組件</Heading>
                  <Text color="fg.muted" fontSize="sm">
                    響應式網格、彈性佈局、堆疊容器等，
                    讓您輕鬆建構任何版面設計
                  </Text>
                  <HStack w="full">
                    <Badge colorPalette="blue" size="sm">Flex</Badge>
                    <Badge colorPalette="green" size="sm">Grid</Badge>
                    <Badge colorPalette="purple" size="sm">Stack</Badge>
                  </HStack>
                </VStack>
              </Box>

              {/* 資料展示 */}
              <Box bg="bg.surface" p={6} borderRadius="xl" border="1px solid" borderColor="border.subtle" shadow="md">
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">資料展示</Heading>
                  <Text color="fg.muted" fontSize="sm">
                    表格、清單、卡片等組件，
                    優雅地展示各種資料內容
                  </Text>
                  <HStack w="full">
                    <Badge colorPalette="orange" size="sm">Table</Badge>
                    <Badge colorPalette="red" size="sm">List</Badge>
                    <Badge colorPalette="teal" size="sm">Card</Badge>
                  </HStack>
                </VStack>
              </Box>

              {/* 導航組件 */}
              <Box bg="bg.surface" p={6} borderRadius="xl" border="1px solid" borderColor="border.subtle" shadow="md">
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">導航組件</Heading>
                  <Text color="fg.muted" fontSize="sm">
                    標籤頁、麵包屑、分頁器等，
                    創造直觀的導航體驗
                  </Text>
                  <HStack w="full">
                    <Badge colorPalette="cyan" size="sm">Tabs</Badge>
                    <Badge colorPalette="pink" size="sm">Breadcrumb</Badge>
                    <Badge colorPalette="yellow" size="sm">Pagination</Badge>
                  </HStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* 統計數據區域 */}
      <Box py={20} bg="bg.subtle">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} textAlign="center">
            <VStack gap={2}>
              <Heading size="3xl" color="blue.500">50+</Heading>
              <Text color="fg.muted" fontWeight="medium">組件數量</Text>
            </VStack>
            <VStack gap={2}>
              <Heading size="3xl" color="green.500">100K+</Heading>
              <Text color="fg.muted" fontWeight="medium">每週下載</Text>
            </VStack>
            <VStack gap={2}>
              <Heading size="3xl" color="purple.500">30K+</Heading>
              <Text color="fg.muted" fontWeight="medium">GitHub Stars</Text>
            </VStack>
            <VStack gap={2}>
              <Heading size="3xl" color="orange.500">5K+</Heading>
              <Text color="fg.muted" fontWeight="medium">開發者</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* 頁腳 */}
      <Box id="contact" bg="gray.900" py={16} color="white">
        <Container maxW="container.xl">
          <VStack gap={12}>
            {/* 主要頁腳內容 */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
              {/* 品牌資訊 */}
              <VStack align="start" gap={4}>
                <HStack>
                  <Box 
                    w={8} 
                    h={8} 
                    bg="blue.500" 
                    borderRadius="lg" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                  >
                    <Icon color="white" boxSize={5}>
                      <LuLayers />
                    </Icon>
                  </Box>
                  <Heading size="md" color="white">
                    Chakra UI
                  </Heading>
                </HStack>
                <Text color="gray.400" fontSize="sm" maxW="250px">
                  簡單、模組化且可存取的 React 組件庫，
                  讓建構美麗的應用程式變得輕鬆。
                </Text>
                
                {/* 社交媒體圖標 */}
                <HStack gap={3}>
                  <IconButton 
                    aria-label="Twitter" 
                    variant="ghost" 
                    size="sm"
                    color="gray.400"
                    _hover={{ color: 'blue.400' }}
                  >
                    <Icon><LuTwitter /></Icon>
                  </IconButton>
                  <IconButton 
                    aria-label="LinkedIn" 
                    variant="ghost" 
                    size="sm"
                    color="gray.400"
                    _hover={{ color: 'blue.400' }}
                  >
                    <Icon><LuLinkedin /></Icon>
                  </IconButton>
                  <IconButton 
                    aria-label="GitHub" 
                    variant="ghost" 
                    size="sm"
                    color="gray.400"
                    _hover={{ color: 'blue.400' }}
                  >
                    <Icon><LuGithub /></Icon>
                  </IconButton>
                  <IconButton 
                    aria-label="Instagram" 
                    variant="ghost" 
                    size="sm"
                    color="gray.400"
                    _hover={{ color: 'blue.400' }}
                  >
                    <Icon><LuInstagram /></Icon>
                  </IconButton>
                </HStack>
              </VStack>
              
              {/* 產品連結 */}
              <VStack align="start" gap={4}>
                <Heading size="sm" color="white">產品</Heading>
                <VStack align="start" gap={2}>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    組件庫
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    設計系統
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    主題編輯器
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    圖標庫
                  </Link>
                </VStack>
              </VStack>
              
              {/* 開發者資源 */}
              <VStack align="start" gap={4}>
                <Heading size="sm" color="white">開發者</Heading>
                <VStack align="start" gap={2}>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    文檔
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    API 參考
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    範例程式碼
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    GitHub
                  </Link>
                </VStack>
              </VStack>
              
              {/* 聯絡資訊 */}
              <VStack align="start" gap={4}>
                <Heading size="sm" color="white">聯絡我們</Heading>
                <VStack align="start" gap={2}>
                  <HStack>
                    <Icon color="gray.400"><LuMail /></Icon>
                    <Text color="gray.400" fontSize="sm">hello@chakra-ui.com</Text>
                  </HStack>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    支援中心
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    社群論壇
                  </Link>
                  <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                    意見回饋
                  </Link>
                </VStack>
              </VStack>
            </SimpleGrid>
            
            <Separator borderColor="gray.800" />
            
            {/* 版權資訊 */}
            <Flex 
              direction={{ base: 'column', md: 'row' }} 
              justify="space-between" 
              align="center" 
              gap={4}
              w="full"
            >
              <Text fontSize="sm" color="gray.400">
                © 2024 Chakra UI 展示. 使用 ❤️ 和 Chakra UI 製作
              </Text>
              <HStack gap={6}>
                <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  隱私政策
                </Link>
                <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  服務條款
                </Link>
                <Link href="#" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Cookie 政策
                </Link>
              </HStack>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
