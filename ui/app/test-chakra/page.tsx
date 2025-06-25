'use client'

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid
} from '@chakra-ui/react';
import { ColorModeButton } from '../../components/ui/color-mode';

export default function TestChakraPage() {
  return (
    <Container maxW="container.lg" py={8}>
      <Stack gap={8}>
        <Box textAlign="center">
          <Heading mb={4}>Chakra UI 測試頁面</Heading>
          <Text color="fg.muted" mb={6}>
            這個頁面用來測試 Chakra UI v3 的各種功能是否正常運作
          </Text>
          <ColorModeButton />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Box p={6} bg="bg.surface" borderRadius="md" borderWidth="1px">
            <Heading size="md" mb={3}>按鈕測試</Heading>
            <Stack gap={3}>
              <Button colorPalette="blue" variant="solid">實心按鈕</Button>
              <Button colorPalette="green" variant="outline">輪廓按鈕</Button>
              <Button colorPalette="red" variant="ghost">幽靈按鈕</Button>
            </Stack>
          </Box>

          <Box p={6} bg="bg.surface" borderRadius="md" borderWidth="1px">
            <Heading size="md" mb={3}>顏色測試</Heading>
            <Stack gap={2}>
              <Text color="fg">主要文字顏色</Text>
              <Text color="fg.muted">次要文字顏色</Text>
              <Text color="blue.500">藍色文字</Text>
              <Text color="green.600">綠色文字</Text>
            </Stack>
          </Box>
        </SimpleGrid>

        <Box p={6} bg="colorPalette.50" borderRadius="md" borderWidth="1px" colorPalette="purple">
          <Heading size="md" mb={3} color="colorPalette.700">色彩調色板測試</Heading>
          <Text color="colorPalette.600">
            這個區塊使用了 colorPalette 屬性，應該會顯示紫色主題
          </Text>
          <Button mt={3} colorPalette="purple" variant="solid">
            紫色按鈕
          </Button>
        </Box>
      </Stack>
    </Container>
  );
} 