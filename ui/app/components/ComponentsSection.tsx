'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Button,
  Input,
  Checkbox,
  Switch,
  Alert,
  Progress,
  Spinner,
  VStack,
  HStack
} from '@chakra-ui/react';

/**
 * 組件展示項目的介面定義
 */
export interface ComponentShowcase {
  /** 組件類型標題 */
  title: string;
  /** 組件描述 */
  description?: string;
  /** 示例標籤列表 */
  badges?: Array<{
    label: string;
    color: string;
  }>;
  /** 組件類型 */
  type: 'interactive' | 'form' | 'feedback' | 'layout' | 'data' | 'navigation';
}

/**
 * 組件展示區域組件的屬性介面
 */
export interface ComponentsSectionProps {
  /** 區域標題 */
  sectionTitle?: string;
  /** 區域描述 */
  sectionDescription?: string;
  /** 組件展示列表 */
  showcases?: ComponentShowcase[];
}

/**
 * 組件展示區域組件
 * 
 * 功能特點：
 * - 展示各種類型的 UI 組件
 * - 響應式網格布局
 * - 互動式組件演示
 * - 分類明確的組件展示
 * - 實際可操作的組件範例
 * 
 * @param props - 組件展示區域配置屬性
 * @returns 組件展示區域組件
 */
export default function ComponentsSection({
  sectionTitle = "強大的組件生態",
  sectionDescription = "50+ 個精心設計的組件，涵蓋所有常見使用場景，讓您能夠快速建構專業級應用程式",
  showcases = [
    {
      title: "互動組件",
      type: "interactive"
    },
    {
      title: "表單組件", 
      type: "form"
    },
    {
      title: "回饋組件",
      type: "feedback"
    },
    {
      title: "佈局組件",
      description: "響應式網格、彈性佈局、堆疊容器等，讓您輕鬆建構任何版面設計",
      badges: [
        { label: "Flex", color: "blue" },
        { label: "Grid", color: "green" },
        { label: "Stack", color: "purple" }
      ],
      type: "layout"
    },
    {
      title: "資料展示",
      description: "表格、清單、卡片等組件，優雅地展示各種資料內容",
      badges: [
        { label: "Table", color: "orange" },
        { label: "List", color: "red" },
        { label: "Card", color: "teal" }
      ],
      type: "data"
    },
    {
      title: "導航組件",
      description: "標籤頁、麵包屑、分頁器等，創造直觀的導航體驗",
      badges: [
        { label: "Tabs", color: "cyan" },
        { label: "Breadcrumb", color: "pink" },
        { label: "Pagination", color: "yellow" }
      ],
      type: "navigation"
    }
  ]
}: ComponentsSectionProps) {
  console.log('渲染組件展示區域組件');
  
  /**
   * 根據組件類型渲染對應的示例內容
   */
  const renderComponentExample = (type: ComponentShowcase['type']) => {
    switch (type) {
      case 'interactive':
        return (
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
        );
      
      case 'form':
        return (
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
        );
      
      case 'feedback':
        return (
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
        );
      
      default:
        return null;
    }
  };
  
  return (
    <Box id="components" py={20}>
      <Container maxW="container.xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="3xl" color="fg">{sectionTitle}</Heading>
            <Text fontSize="lg" color="fg.muted" maxW="600px">
              {sectionDescription}
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {showcases.map((showcase, index) => (
              <Box 
                key={index}
                bg="bg.surface" 
                p={6} 
                borderRadius="xl" 
                border="1px solid" 
                borderColor="border.subtle" 
                shadow="md"
              >
                <VStack gap={4} align="start">
                  <Heading size="md" color="fg">{showcase.title}</Heading>
                  
                  {/* 根據組件類型渲染對應的示例 */}
                  {renderComponentExample(showcase.type)}
                  
                  {/* 如果有描述文字，則顯示 */}
                  {showcase.description && (
                    <Text color="fg.muted" fontSize="sm">
                      {showcase.description}
                    </Text>
                  )}
                  
                  {/* 如果有標籤，則顯示 */}
                  {showcase.badges && (
                    <HStack w="full">
                      {showcase.badges.map((badge, badgeIndex) => (
                        <Badge 
                          key={badgeIndex}
                          colorPalette={badge.color} 
                          size="sm"
                        >
                          {badge.label}
                        </Badge>
                      ))}
                    </HStack>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
} 