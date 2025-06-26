'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack
} from '@chakra-ui/react';

/**
 * 統計數據項目的介面定義
 */
export interface StatItem {
  /** 統計數字 */
  value: string;
  /** 統計標籤 */
  label: string;
  /** 數字顏色 */
  color: string;
}

/**
 * 統計數據區域組件的屬性介面
 */
export interface StatsSectionProps {
  /** 統計數據列表 */
  stats?: StatItem[];
}

/**
 * 統計數據區域組件
 * 
 * 功能特點：
 * - 響應式網格布局展示統計數據
 * - 不同顏色的數字強調效果
 * - 簡潔明瞭的設計風格
 * - 可自定義統計項目
 * - 適合展示成就和數據指標
 * 
 * @param props - 統計數據區域配置屬性
 * @returns 統計數據區域組件
 */
export default function StatsSection({
  stats = [
    {
      value: "50+",
      label: "組件數量",
      color: "blue.500"
    },
    {
      value: "100K+",
      label: "每週下載",
      color: "green.500"
    },
    {
      value: "30K+",
      label: "GitHub Stars",
      color: "purple.500"
    },
    {
      value: "5K+",
      label: "開發者",
      color: "orange.500"
    }
  ]
}: StatsSectionProps) {
  console.log('渲染統計數據區域組件');
  
  return (
    <Box py={20} bg="bg.subtle">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} textAlign="center">
          {stats.map((stat, index) => (
            <VStack key={index} gap={2}>
              <Heading size="3xl" color={stat.color}>
                {stat.value}
              </Heading>
              <Text color="fg.muted" fontWeight="medium">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 