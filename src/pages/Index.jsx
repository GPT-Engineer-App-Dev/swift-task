import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <Flex>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={2} />
        <Button onClick={handleAddTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <List mt={4} spacing={2}>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <Flex align="center">
              <Box>{todo}</Box>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} size="sm" colorScheme="red" />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
