'use client'

import {
  Box,
  Container,
  Heading,
  Flex,
  Icon,
  Link,
  Button,
  IconButton,
  Stack
} from '@chakra-ui/react';
import { ColorModeButton } from '../../components/ui/color-mode';
import { LuLayers, LuMenu, LuX } from 'react-icons/lu';
import { useState } from 'react';

/**
 * 導航欄組件的屬性介面
 */
export interface NavigationProps {
  /** 品牌名稱，預設為 "Chakra UI" */
  brandName?: string;
  /** 導航連結配置 */
  navLinks?: Array<{
    href: string;
    label: string;
  }>;
}

/**
 * 響應式導航欄組件
 * 
 * 功能特點：
 * - 固定在頂部，具有背景模糊效果
 * - 響應式設計，桌面顯示完整導航，手機顯示折疊菜單
 * - 品牌 Logo 和顏色模式切換按鈕
 * - 支援自定義導航連結
 * 
 * @param props - 導航欄配置屬性
 * @returns 導航欄組件
 */
export default function Navigation({ 
  brandName = "Chakra UI",
  navLinks = [
    { href: "#home", label: "首頁" },
    { href: "#features", label: "功能" },
    { href: "#components", label: "組件" },
    { href: "#about", label: "關於" },
    { href: "#contact", label: "聯絡" }
  ]
}: NavigationProps) {
  console.log('渲染導航欄組件');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
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
              {brandName}
            </Heading>
          </Flex>
          
          {/* 桌面導航連結 */}
          <Flex gap={8} align="center" display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                fontWeight="medium" 
                _hover={{ color: 'blue.500' }}
              >
                {link.label}
              </Link>
            ))}
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
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  fontWeight="medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button colorPalette="blue" size="sm" w="full">
                開始使用
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
} 