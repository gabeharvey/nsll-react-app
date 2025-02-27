import { Box, Flex, Text } from '@chakra-ui/react';

const Home = () => {
  const handleCardClick = (message) => {
    alert(message);
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='skyblue' p={5} textAlign="center">
        <Box
        as="button"
        onClick={() => handleCardClick('Welcome!')}
        bgImage={`url('/src/assets/nsll-logo.jpg')`}
        bgSize="cover"
        bgPos="center"
        boxShadow="md"
        p={2}
        rounded="md"
        mb={20}
        width="300px"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
      </Box>
      <Flex direction='column' align='center' mb={10}>
        <Text fontSize="2xl" color='white' fontFamily='Graduate, sans-serif' mb={10}>Welcome to Northside Suburban Little League</Text>
      </Flex>
      <Flex direction={['column', 'row']} spacing={10}>
        <Box
          as="button"
          onClick={() => handleCardClick('Baseball!')}
          bgImage="url('src/assets/baseball-player.jpg')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={5}
          rounded="md"
          m={2}
          width="300px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Graduate, sans-serif' color='white' mb={80}>Baseball</Text>
        </Box>
        <Box
          as="button"
          onClick={() => handleCardClick('Softball!')}
          bgImage="url('src/assets/softball-player.jpg')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={5}
          rounded="md"
          m={2}
          width="300px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Graduate, sans-serif' color='yellow' mt={80}>Softball</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
