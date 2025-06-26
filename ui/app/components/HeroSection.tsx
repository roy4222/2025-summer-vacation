'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Badge,
  Flex,
  Icon,
  VStack,
  HStack
} from '@chakra-ui/react';
import { LuCode, LuGithub } from 'react-icons/lu';

/**
 * 主視覺區域組件的屬性介面
 */
export interface HeroSectionProps {
  /** 主標題文字 */
  title?: string;
  /** 強調文字（橙色顯示） */
  highlightText?: string;
  /** 描述文字 */
  description?: string;
  /** 徽章文字 */
  badgeText?: string;
  /** 主要按鈕文字 */
  primaryButtonText?: string;
  /** 次要按鈕文字 */
  secondaryButtonText?: string;
}

/**
 * 主視覺區域組件
 * 
 * 功能特點：
 * - 漸層背景設計，具有視覺衝擊力
 * - 響應式布局，桌面橫向排列，手機縱向排列
 * - 包含標題、描述、行動按鈕和機器人圖像
 * - 浮動粒子動畫效果
 * - 完全可自定義的文字內容
 * 
 * @param props - 主視覺區域配置屬性
 * @returns 主視覺區域組件
 */
export default function HeroSection({
  title = "用 Chakra UI 建構",
  highlightText = "美麗的應用程式",
  description = "簡單、模組化且可存取的組件庫，讓您快速建構 React 應用程式。支援深淺模式、完全可定制，並遵循 WAI-ARIA 無障礙標準。",
  badgeText = "🎨 現代化 React UI 組件庫",
  primaryButtonText = "開始使用",
  secondaryButtonText = "查看 GitHub"
}: HeroSectionProps) {
  console.log('渲染主視覺區域組件');
  
  return (
    <>
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
                {badgeText}
              </Badge>
              
              <Heading 
                as="h1" 
                size={{ base: '3xl', md: '4xl', lg: '5xl' }}
                lineHeight="1.1"
                fontWeight="bold"
                color="white"
              >
                {title}
                <br />
                <Text as="span" color="orange.300">
                  {highlightText}
                </Text>
              </Heading>
              
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                maxW="500px"
                lineHeight="1.6"
                color="white"
                opacity={0.9}
              >
                {description}
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
                  {primaryButtonText}
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
                  {secondaryButtonText}
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
      </Box>
      
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
    </>
  );
} 