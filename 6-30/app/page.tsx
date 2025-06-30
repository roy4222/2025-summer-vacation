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
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.200" color="black">
      <Container maxW="md" py={10}>
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={8}
          borderWidth={1}
          borderColor="gray.300"
        >
          <VStack gap={6} color="black">
            <Heading as="h1" size="xl" textAlign="center" color="black">
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
                borderColor="gray.300"
                _focus={{ borderColor: "teal.800" }}
                _hover={{ borderColor: "teal.500" }}
              />
              <Button
                colorScheme="teal"
                size="md"
                px={6}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.300"
                _hover={{ bg: "teal.500", color: "white" }}
              >
                新增
              </Button>
            </HStack>

            {/* 待辦事項列表 */}
            <VStack w="full" gap={3} align="stretch" _hover={{ bg: "gray.100" }}>
              <Box
                p={3}
                borderWidth={1}
                borderRadius="md"
                borderColor="gray.200"
              >
                <HStack justify="space-between" >
                  <Text>範例待辦事項 1</Text>
                  <Button size="sm" color="red" variant="outline" _hover={{ bg: "red.500", color: "white" }}>
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
