"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Input,
  Button,
  HStack,
  Text,
  Flex,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

export default function Home() {
  // 使用 useColorModeValue 來動態設定顏色
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const hoverBgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Box
        bg={cardBgColor}
        borderBottom="1px solid"
        borderColor={borderColor}
        boxShadow="sm"
        position="sticky"
        top="0"
        zIndex="sticky"
      >
        <Container maxW="container.lg" py={4}>
          <Flex alignItems="center">
            <Box
              w={12}
              h={12}
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
            <Text fontSize="xl" fontWeight="bold" color={textColor} ml={3}>
              TodoApp
            </Text>
            <Spacer />
            <ColorModeButton />
          </Flex>
        </Container>
      </Box>

      {/* 主要內容區域 */}
      <Container maxW="container.md" py={8}>
        <VStack gap={6}>
          <Heading size="lg" textAlign="center" color={textColor}>
            我的待辦事項清單
          </Heading>

          {/* 新增待辦事項表單 */}
          <Box
            w="full"
            bg={cardBgColor}
            p={6}
            borderRadius="lg"
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <HStack gap={3}>
              <Input
                placeholder="輸入新的待辦事項..."
                size="lg"
                borderColor={borderColor}
                _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
                _focus={{
                  borderColor: "teal.400",
                  boxShadow: "0 0 0 1px teal.400",
                }}
              />
              <Button
                colorScheme="teal"
                size="lg"
                px={8}
                _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
                _active={{ transform: "translateY(0)" }}
              >
                新增
              </Button>
            </HStack>
          </Box>

          {/* 待辦事項列表 */}
          <VStack gap={3} w="full">
            {/* 範例待辦事項 1 */}
            <Box
              w="full"
              bg={cardBgColor}
              p={4}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
              _hover={{
                bg: hoverBgColor,
                transform: "translateY(-1px)",
                boxShadow: "md",
                transition: "all 0.2s",
              }}
              transition="all 0.2s"
            >
              <HStack gap={3}>
                <Button
                  size="sm"
                  colorScheme="gray"
                  variant="outline"
                  minW="fit-content"
                >
                  ○
                </Button>

                <Text flex={1} fontSize="md" color={textColor}>
                  範例待辦事項 1
                </Text>

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

            {/* 範例待辦事項 2 */}
            <Box
              w="full"
              bg={cardBgColor}
              p={4}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
              _hover={{
                bg: hoverBgColor,
                transform: "translateY(-1px)",
                boxShadow: "md",
                transition: "all 0.2s",
              }}
              transition="all 0.2s"
            >
              <HStack gap={3}>
                <Button
                  size="sm"
                  colorScheme="green"
                  variant="solid"
                  minW="fit-content"
                >
                  ✓
                </Button>

                <Text
                  flex={1}
                  fontSize="md"
                  textDecoration="line-through"
                  color={useColorModeValue("gray.500", "gray.400")}
                  opacity={0.7}
                >
                  範例待辦事項 2
                </Text>

                <Badge colorScheme="green" variant="subtle">
                  已完成
                </Badge>

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

            {/* 範例待辦事項 3 */}
            <Box
              w="full"
              bg={cardBgColor}
              p={4}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
              _hover={{
                bg: hoverBgColor,
                transform: "translateY(-1px)",
                boxShadow: "md",
                transition: "all 0.2s",
              }}
              transition="all 0.2s"
            >
              <HStack gap={3}>
                <Button
                  size="sm"
                  colorScheme="gray"
                  variant="outline"
                  minW="fit-content"
                >
                  ○
                </Button>

                <Text flex={1} fontSize="md" color={textColor}>
                  範例待辦事項 3
                </Text>

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

          {/* 統計資訊 */}
          <Box
            w="full"
            bg={cardBgColor}
            p={4}
            borderRadius="lg"
            boxShadow="sm"
            border="1px"
            borderColor={borderColor}
          >
            <HStack justify="space-between">
              <Text color={textColor}>總共 3 項</Text>
              <Text color="green.500">已完成 1 項</Text>
              <Text color="orange.500">待完成 2 項</Text>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
