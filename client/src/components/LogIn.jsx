import { Box, Flex, Input, Button, Text } from '@chakra-ui/react';

const LogIn = () => {
  const handleLogin = () => {
    alert('Logging in...');
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='skyblue' p={5} textAlign="center">
      <Box
        bg='white'
        boxShadow="md"
        p={8}
        rounded="md"
        width="300px"
        textAlign="left"
      >
        <Text fontSize="2xl" color='skyblue' fontFamily='Graduate, sans-serif' mb={4}>Login</Text>
        <Input placeholder="Username" mb={3} borderColor="skyblue" />
        <Input placeholder="Password" type="password" mb={6} borderColor="skyblue" />
        <Button
          onClick={handleLogin}
          bg="skyblue"
          color="white"
          _hover={{ bg: "blue.600" }}
          width="100%"
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default LogIn;
