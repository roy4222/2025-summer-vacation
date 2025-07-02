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
import { useState } from "react";

export default function Home() {
  // 使用 useColorModeValue 來動態設定顏色主題
  // 第一個參數是淺色模式的顏色，第二個參數是深色模式的顏色
  const bgColor = useColorModeValue("gray.100", "gray.900");  // 整體背景色
  const cardBgColor = useColorModeValue("white", "gray.800");  // 卡片背景色
  const textColor = useColorModeValue("gray.800", "gray.100");  // 文字顏色
  const borderColor = useColorModeValue("gray.300", "gray.600");  // 邊框顏色
  const hoverBgColor = useColorModeValue("gray.50", "gray.700");  // 滑鼠懸停背景色

  // 待辦事項狀態管理
  // todos 陣列存放所有待辦事項，每個項目包含 id、text 和 completed 屬性
  const [todos, setTodos] = useState([
    { id: 1, text: "範例待辦事項 1", completed: false },
    { id: 2, text: "範例待辦事項 2", completed: true },
    { id: 3, text: "範例待辦事項 3", completed: false },
  ]);

  // 輸入框狀態管理
  // inputValue 存放使用者在輸入框中輸入的文字
  const [inputValue, setInputValue] = useState("");

  /**
   * 處理輸入框變更事件
   * @param event - React 輸入框變更事件
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  /**
   * 新增待辦事項的函式
   * 當使用者點擊新增按鈕時會被呼叫
   */
  const addTodo = () => {
    // 檢查輸入框是否為空，如果為空則不執行新增
    if (inputValue.trim() === "") return;

    // 建立新的待辦事項物件
    // 使用 Date.now() 作為唯一 ID，確保每個待辦事項都有不同的識別碼
    const newTodo = {
      id: Date.now(),           // 使用時間戳記作為唯一 ID
      text: inputValue,         // 待辦事項內容來自輸入框
      completed: false,         // 新建立的待辦事項預設為未完成狀態
    };

    // 更新待辦事項陣列，使用展開運算子 (...) 保留原有的待辦事項，並在最後加入新的
    setTodos([...todos, newTodo]);
    
    // 清空輸入框，讓使用者可以輸入下一個待辦事項
    setInputValue("");
  };
  
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
                value={inputValue}
                onChange={handleInputChange}
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
                onClick={addTodo}
              >
                新增
              </Button>
            </HStack>
          </Box>

          {/* 待辦事項列表 */}
          <VStack gap={3} w="full">
            {todos.map((todo) => (
              <Box key={todo.id} w="full" bg={cardBgColor} p={4} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
                <HStack gap={3}>
                  <Button size="sm" colorScheme="gray" variant="outline" minW="fit-content">
                    {todo.completed ? "✓" : "○"}
                  </Button>
                  <Text flex={1} fontSize="md" color={textColor}>
                    {todo.text}
                  </Text>
                  <Badge colorScheme="green" variant="subtle">
                    {todo.completed ? "已完成" : "待完成"}
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
            ))}
          </VStack>

          {/* 統計資訊 */}
          <Box w="full" bg={cardBgColor} p={4} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
            <HStack justify="space-between">
              <Text color={textColor}>總共 {todos.length} 項</Text>
              <Text color="green.500">已完成 {todos.filter(todo => todo.completed).length} 項</Text>
              <Text color="orange.500">待完成 {todos.filter(todo => !todo.completed).length} 項</Text>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
