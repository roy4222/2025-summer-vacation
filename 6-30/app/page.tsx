"use client";

import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  HStack,
  Text,
  Box,
  Flex,
  IconButton,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

export default function Home() {
  // 定義深色/淺色模式的顏色值
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const headerBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const hoverBg = useColorModeValue("gray.50", "gray.600");

  return (
    <Box minH="100vh" bg={bgColor} color={textColor}>
      {/* Header */}
      <Box 
        bg={headerBg} 
        borderBottom="1px solid" 
        borderColor={borderColor} 
        boxShadow="sm"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="6xl" py={4}>
          <Flex align="center" gap={4}>
            {/* Logo/Brand */}
            <HStack>
              <Box 
                w={8} 
                h={8} 
                bg="teal.500" 
                borderRadius="md" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Text color="white" fontSize="lg" fontWeight="bold">
                  T
                </Text>
              </Box>
              <Text fontSize="xl" fontWeight="bold" color={textColor}>
                TodoApp
              </Text>
            </HStack>

            <Spacer />

            {/* Header Actions */}
            <HStack gap={4}>
              <ColorModeButton
                variant="ghost"
                size="md"
                _hover={{ bg: hoverBg }}
              />
              <Box
                w={8}
                h={8}
                bg="teal.500"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                _hover={{ bg: "teal.600" }}
                transition="background 0.2s"
              >
                <Text color="white" fontSize="sm" fontWeight="bold">
                  羅傑
                </Text>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="md" py={10}>
        <Box
          bg={cardBg}
          borderRadius="lg"
          boxShadow="lg"
          p={8}
          borderWidth={1}
          borderColor={borderColor}
        >
          <VStack gap={6}>
            <Heading as="h1" size="xl" textAlign="center" color={textColor}>
              待辦事項清單
            </Heading>

            {/* 新增待辦事項的輸入區域 */}
            <HStack w="full" gap={3}>
              <Input
                placeholder="輸入新的待辦事項..."
                size="md"
                flex={1}
                borderRadius="md"
                border="1px solid"
                borderColor={borderColor}
                bg={cardBg}
                color={textColor}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
                _hover={{ borderColor: "teal.400" }}
                _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
              />
              <Button
                colorScheme="teal"
                size="md"
                px={6}
                borderRadius="md"
                border="1px solid"
                borderColor={borderColor}
                _hover={{ bg: "teal.500", color: "white" }}
              >
                新增
              </Button>
            </HStack>

            {/* 待辦事項列表 */}
            <VStack w="full" gap={3} align="stretch">
              <Box
                p={3}
                borderWidth={1}
                borderRadius="md"
                borderColor={borderColor}
                bg={cardBg}
                _hover={{ bg: hoverBg }}
                transition="background 0.2s"
              >
                <HStack justify="space-between">
                  <Text color={textColor}>範例待辦事項 1</Text>
                  <Button 
                    size="sm" 
                    colorScheme="red" 
                    variant="outline" 
                    _hover={{ bg: "red.500", color: "white" }}
                  >
                    刪除
                  </Button>
                </HStack>
              </Box>

              <Box
                p={3}
                borderWidth={1}
                borderRadius="md"
                borderColor={borderColor}
                bg={cardBg}
                _hover={{ bg: hoverBg }}
                transition="background 0.2s"
              >
                <HStack justify="space-between">
                  <Text color={textColor}>範例待辦事項 2</Text>
                  <Button 
                    size="sm" 
                    colorScheme="red" 
                    variant="outline" 
                    _hover={{ bg: "red.500", color: "white" }}
                  >
                    刪除
                  </Button>
                </HStack>
              </Box>

              <Box
                p={3}
                borderWidth={1}
                borderRadius="md"
                borderColor={borderColor}
                bg={cardBg}
                _hover={{ bg: hoverBg }}
                transition="background 0.2s"
              >
                <HStack justify="space-between">
                  <Text color={textColor}>範例待辦事項 3</Text>
                  <Button 
                    size="sm" 
                    colorScheme="red" 
                    variant="outline" 
                    _hover={{ bg: "red.500", color: "white" }}
                  >
                    刪除
                  </Button>
                </HStack>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
