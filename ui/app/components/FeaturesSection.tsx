'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Icon,
  VStack
} from '@chakra-ui/react';
import { LuZap, LuPalette, LuShield, LuStar } from 'react-icons/lu';

/**
 * 功能特色項目的介面定義
 */
export interface FeatureItem {
  /** 圖標組件 */
  icon: React.ComponentType;
  /** 圖標顏色 */
  iconColor: string;
  /** 背景顏色 */
  bgColor: string;
  /** 標題 */
  title: string;
  /** 描述文字 */
  description: string;
}

/**
 * 功能特色區域組件的屬性介面
 */
export interface FeaturesSectionProps {
  /** 區域標題 */
  sectionTitle?: string;
  /** 主要卡片標題 */
  mainCardTitle?: string;
  /** 主要卡片強調文字 */
  mainCardHighlight?: string;
  /** 主要卡片描述 */
  mainCardDescription?: string;
  /** 功能特色列表 */
  features?: FeatureItem[];
}

/**
 * 功能特色區域組件
 * 
 * 功能特點：
 * - 大型特色卡片展示核心理念
 * - 功能特色網格布局
 * - 響應式設計，支援不同螢幕尺寸
 * - 懸停效果和漸層背景
 * - 完全可自定義的內容
 * 
 * @param props - 功能特色區域配置屬性
 * @returns 功能特色區域組件
 */
export default function FeaturesSection({
  sectionTitle = "Chakra UI？",
  mainCardTitle = "簡單、模組化且",
  mainCardHighlight = "完全可存取",
  mainCardDescription = "Chakra UI 提供一套精心設計的 React 組件，讓開發者能夠快速建構美觀、響應式且無障礙的使用者介面。每個組件都遵循設計系統原則。",
  features = [
    {
      icon: LuZap,
      iconColor: "blue.600",
      bgColor: "blue.100",
      title: "快速開發",
      description: "預製的組件和工具讓您專注於業務邏輯，而不是重複的樣式編寫"
    },
    {
      icon: LuPalette,
      iconColor: "purple.600",
      bgColor: "purple.100",
      title: "設計系統",
      description: "統一的設計語言和主題系統，支援深淺模式和完全客製化"
    },
    {
      icon: LuShield,
      iconColor: "green.600",
      bgColor: "green.100",
      title: "無障礙設計",
      description: "內建 ARIA 支援和鍵盤導航，確保所有使用者都能正常使用"
    },
    {
      icon: LuStar,
      iconColor: "orange.600",
      bgColor: "orange.100",
      title: "開源社群",
      description: "活躍的開源社群支持，持續更新和豐富的生態系統"
    }
  ]
}: FeaturesSectionProps) {
  console.log('渲染功能特色區域組件');
  
  return (
    <Box id="features" py={20} bg="bg.subtle">
      <Container maxW="container.xl">
        <VStack gap={16}>
          <VStack gap={4} textAlign="center">
            <Badge colorPalette="blue" variant="subtle" size="md" px={4} py={2} borderRadius="full">
              為什麼選擇
            </Badge>
            <Heading size="3xl" color="fg" maxW="600px">
              {sectionTitle}
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
                {mainCardTitle}
                <br />
                <Text as="span" color="orange.200">
                  {mainCardHighlight}
                </Text>
              </Heading>
              <Text fontSize="lg" maxW="600px" color="whiteAlpha.900">
                {mainCardDescription}
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
            {features.map((feature, index) => (
              <Box 
                key={index}
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
                  <Box p={4} bg={feature.bgColor} borderRadius="full">
                    <Icon color={feature.iconColor} boxSize={8}>
                      <feature.icon />
                    </Icon>
                  </Box>
                  <Heading size="md" color="fg">{feature.title}</Heading>
                  <Text color="fg.muted" textAlign="center" fontSize="sm">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
} 