'use client';

import { Button, Stack, Link } from '@chakra-ui/react';
import { ColorModeButton } from '../../components/ui/color-mode';
import NextLink from 'next/link';

/**
 * 導航按鈕組件
 * 
 * 提供互動式的導航按鈕，包含：
 * - hover 效果
 * - 樣式切換
 * - 點擊導航功能
 * - 色彩模式切換
 * 
 * @returns {JSX.Element} 導航按鈕組件
 */
export default function NavigationButtons() {
  console.log('渲染導航按鈕組件');
  
  return (
    <Stack 
      direction={{ base: 'column', sm: 'row' }} 
      gap={4} 
      align="center"
      justify="center"
      wrap="wrap"
      mb={12}
    >
      <Button
        asChild
        colorPalette="blue"
        variant="solid"
        size="lg"
        _hover={{
          transform: 'translateY(-2px)',
          shadow: 'lg'
        }}
        transition="all 0.2s"
      >
        <NextLink href="/about">關於我們</NextLink>
      </Button>
      
      <Button
        asChild
        colorPalette="blue"
        variant="outline"
        size="lg"
        _hover={{
          transform: 'translateY(-2px)',
          shadow: 'lg'
        }}
        transition="all 0.2s"
      >
        <NextLink href="/contact">聯絡我們</NextLink>
      </Button>
      
      <ColorModeButton size="lg" />
    </Stack>
  );
} 