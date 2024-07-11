import { Box, Flex, Text } from '@chakra-ui/react';

const Home = () => {
  const handleCardClick = (message) => {
    alert(message);
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='skyblue' p={5} textAlign="center">
      <Flex direction='column' align='center' mb={10}>
        <Text fontSize="2xl" color='white' fontFamily='Permanent Marker, sans-serif' mb={10}>Welcome to Northside Suburban Little League</Text>
      </Flex>
      <Flex direction={['column', 'row']} spacing={10}>
        <Box
          as="button"
          onClick={() => handleCardClick('Baseball!')}
          bgImage="url('src/assets/baseball.jpg')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={5}
          rounded="md"
          m={2}
          width="200px"
          height="300px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Staatliches, sans-serif' color='white' mb={60}>Baseball</Text>
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
          width="200px"
          height="300px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Staatliches, sans-serif' color='orange' mt={60}>Softball</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
