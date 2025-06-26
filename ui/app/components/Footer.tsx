'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Link,
  IconButton,
  VStack,
  HStack,
  Separator
} from '@chakra-ui/react';
import {
  LuLayers,
  LuMail,
  LuTwitter,
  LuLinkedin,
  LuGithub,
  LuInstagram
} from 'react-icons/lu';

/**
 * 頁腳連結項目的介面定義
 */
export interface FooterLink {
  /** 連結文字 */
  label: string;
  /** 連結網址 */
  href: string;
}

/**
 * 頁腳連結分類的介面定義
 */
export interface FooterSection {
  /** 分類標題 */
  title: string;
  /** 該分類下的連結列表 */
  links: FooterLink[];
}

/**
 * 社交媒體連結的介面定義
 */
export interface SocialLink {
  /** 圖標組件 */
  icon: React.ComponentType;
  /** 連結網址 */
  href: string;
  /** 無障礙標籤 */
  ariaLabel: string;
}

/**
 * 頁腳組件的屬性介面
 */
export interface FooterProps {
  /** 品牌名稱 */
  brandName?: string;
  /** 品牌描述 */
  brandDescription?: string;
  /** 聯絡郵箱 */
  contactEmail?: string;
  /** 版權文字 */
  copyrightText?: string;
  /** 頁腳連結分類 */
  sections?: FooterSection[];
  /** 社交媒體連結 */
  socialLinks?: SocialLink[];
  /** 底部連結 */
  bottomLinks?: FooterLink[];
}

/**
 * 頁腳組件
 * 
 * 功能特點：
 * - 深色背景設計，與主體內容形成對比
 * - 響應式網格布局，適應不同螢幕尺寸
 * - 完整的品牌資訊和社交媒體連結
 * - 分類明確的導航連結
 * - 版權資訊和法律連結
 * - 懸停效果和視覺回饋
 * 
 * @param props - 頁腳配置屬性
 * @returns 頁腳組件
 */
export default function Footer({
  brandName = "Chakra UI",
  brandDescription = "簡單、模組化且可存取的 React 組件庫，讓建構美麗的應用程式變得輕鬆。",
  contactEmail = "hello@chakra-ui.com",
  copyrightText = "© 2024 Chakra UI 展示. 使用 ❤️ 和 Chakra UI 製作",
  sections = [
    {
      title: "產品",
      links: [
        { label: "組件庫", href: "#" },
        { label: "設計系統", href: "#" },
        { label: "主題編輯器", href: "#" },
        { label: "圖標庫", href: "#" }
      ]
    },
    {
      title: "開發者",
      links: [
        { label: "文檔", href: "#" },
        { label: "API 參考", href: "#" },
        { label: "範例程式碼", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    },
    {
      title: "聯絡我們",
      links: [
        { label: "支援中心", href: "#" },
        { label: "社群論壇", href: "#" },
        { label: "意見回饋", href: "#" }
      ]
    }
  ],
  socialLinks = [
    {
      icon: LuTwitter,
      href: "#",
      ariaLabel: "Twitter"
    },
    {
      icon: LuLinkedin,
      href: "#",
      ariaLabel: "LinkedIn"
    },
    {
      icon: LuGithub,
      href: "#",
      ariaLabel: "GitHub"
    },
    {
      icon: LuInstagram,
      href: "#",
      ariaLabel: "Instagram"
    }
  ],
  bottomLinks = [
    { label: "隱私政策", href: "#" },
    { label: "服務條款", href: "#" },
    { label: "Cookie 政策", href: "#" }
  ]
}: FooterProps) {
  console.log('渲染頁腳組件');
  
  return (
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
                  {brandName}
                </Heading>
              </HStack>
              <Text color="gray.400" fontSize="sm" maxW="250px">
                {brandDescription}
              </Text>
              
              {/* 社交媒體圖標 */}
              <HStack gap={3}>
                {socialLinks.map((social, index) => (
                  <IconButton 
                    key={index}
                    aria-label={social.ariaLabel}
                    variant="ghost" 
                    size="sm"
                    color="gray.400"
                    _hover={{ color: 'blue.400' }}
                    asChild
                  >
                    <Link href={social.href}>
                      <Icon><social.icon /></Icon>
                    </Link>
                  </IconButton>
                ))}
              </HStack>
            </VStack>
            
            {/* 動態渲染頁腳分類 */}
            {sections.map((section, index) => (
              <VStack key={index} align="start" gap={4}>
                <Heading size="sm" color="white">{section.title}</Heading>
                <VStack align="start" gap={2}>
                  {section.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.href} 
                      color="gray.400" 
                      fontSize="sm" 
                      _hover={{ color: 'white' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  {/* 如果是聯絡我們分類，加入郵箱 */}
                  {section.title === "聯絡我們" && (
                    <HStack>
                      <Icon color="gray.400"><LuMail /></Icon>
                      <Text color="gray.400" fontSize="sm">{contactEmail}</Text>
                    </HStack>
                  )}
                </VStack>
              </VStack>
            ))}
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
              {copyrightText}
            </Text>
            <HStack gap={6}>
              {bottomLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  color="gray.400" 
                  fontSize="sm" 
                  _hover={{ color: 'white' }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
} 