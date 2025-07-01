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
import { Header } from "@/components/ui/navbar/header";
import { useState, useEffect, useRef } from "react";

// 定義 Todo 的型別
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  // 狀態管理
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "範例待辦事項 1", completed: false },
    { id: 2, text: "範例待辦事項 2", completed: false },
    { id: 3, text: "範例待辦事項 3", completed: false },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isHydrated, setIsHydrated] = useState(false);
  const idCounterRef = useRef(4); // 從4開始，因為已有3個範例項目

  // 處理客戶端水合
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // 新增待辦事項函式
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: idCounterRef.current++, // 使用遞增 ID 而非時間戳
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue(""); // 清空輸入框
    }
  };

  // 刪除待辦事項函式
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 處理按下 Enter 鍵
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // 定義深色/淺色模式的顏色值（始終調用 hooks，但在未水合時使用預設值）
  const dynamicBgColor = useColorModeValue("gray.100", "gray.900");
  const dynamicHeaderBg = useColorModeValue("white", "gray.800");
  const dynamicCardBg = useColorModeValue("white", "gray.700");
  const dynamicTextColor = useColorModeValue("gray.800", "white");
  const dynamicBorderColor = useColorModeValue("gray.300", "gray.600");
  const dynamicHoverBg = useColorModeValue("gray.50", "gray.600");
  const dynamicPlaceholderColor = useColorModeValue("gray.500", "gray.400");
  const dynamicEmptyTextColor = useColorModeValue("gray.500", "gray.400");

  // 在水合前使用預設值，水合後使用動態值
  const bgColor = isHydrated ? dynamicBgColor : "gray.100";
  const headerBg = isHydrated ? dynamicHeaderBg : "white";
  const cardBg = isHydrated ? dynamicCardBg : "white";
  const textColor = isHydrated ? dynamicTextColor : "gray.800";
  const borderColor = isHydrated ? dynamicBorderColor : "gray.300";
  const hoverBg = isHydrated ? dynamicHoverBg : "gray.50";
  const placeholderColor = isHydrated ? dynamicPlaceholderColor : "gray.500";
  const emptyTextColor = isHydrated ? dynamicEmptyTextColor : "gray.500";

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

            <Header />
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
                _hover={{ borderColor: "teal.400" }}
                _placeholder={{ color: placeholderColor }}
              />
              <Button
                colorScheme="teal"
                size="md"
                px={6}
                borderRadius="md"
                border="1px solid"
                borderColor={borderColor}
                onClick={addTodo}
                _hover={{ bg: "teal.500", color: "white" }}
              >
                新增
              </Button>
            </HStack>

            {/* 待辦事項列表 */}
            <VStack w="full" gap={3} align="stretch">
              {todos.length === 0 ? (
                <Text textAlign="center" color={emptyTextColor}>
                  目前沒有待辦事項，新增一個吧！
                </Text>
              ) : (
                todos.map((todo) => (
                  <Box
                    key={todo.id}
                    p={3}
                    borderWidth={1}
                    borderRadius="md"
                    borderColor={borderColor}
                    bg={cardBg}
                    _hover={{ bg: hoverBg }}
                    transition="background 0.2s"
                  >
                    <HStack justify="space-between">
                      <Text color={textColor}>{todo.text}</Text>
                      <Button 
                        size="sm" 
                        colorScheme="red" 
                        variant="outline" 
                        onClick={() => deleteTodo(todo.id)}
                        _hover={{ bg: "red.500", color: "white" }}
                      >
                        刪除
                      </Button>
                    </HStack>
                  </Box>
                ))
              )}
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
