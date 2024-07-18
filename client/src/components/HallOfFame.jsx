import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const HallOfFame = () => {
  // Sample data for Hall of Fame
  const baseballHallOfFame = [
    { name: 'Player A', year: 2020 },
    { name: 'Player B', year: 2019 },
    { name: 'Player C', year: 2018 },
  ];

  const softballHallOfFame = [
    { name: 'Player X', year: 2021 },
    { name: 'Player Y', year: 2020 },
    { name: 'Player Z', year: 2019 },
  ];

  const scrollbarStyle = {
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '4px',
    },
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="skyblue" p={5} textAlign="center">
      <Text fontSize="2xl" color="white" fontFamily="Graduate, sans-serif" mb={10}>
        Baseball Hall of Fame
      </Text>
      <Box boxShadow="md" p={5} rounded="md" bg="white" width={['95%', '80%']} mb={10} overflowX="auto" css={scrollbarStyle}>
        <Table variant="striped" colorScheme="blue" size="sm">
          <Thead>
            <Tr>
              <Th fontFamily='Arsenal SC, cursive'>Name</Th>
              <Th fontFamily='Arsenal SC, cursive'>Year</Th>
            </Tr>
          </Thead>
          <Tbody>
            {baseballHallOfFame.map((inductee, index) => (
              <Tr key={index}>
                <Td fontFamily='Arsenal SC, cursive'>{inductee.name}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{inductee.year}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Text fontSize="2xl" color="white" fontFamily="Graduate, sans-serif" mb={10}>
        Softball Hall of Fame
      </Text>
      <Box boxShadow="md" p={5} rounded="md" bg="white" width={['95%', '80%']} overflowX="auto" css={scrollbarStyle}>
        <Table variant="striped" colorScheme="yellow" size="sm">
          <Thead>
            <Tr>
              <Th fontFamily='Arsenal SC, cursive'>Name</Th>
              <Th fontFamily='Arsenal SC, cursive'>Year</Th>
            </Tr>
          </Thead>
          <Tbody>
            {softballHallOfFame.map((inductee, index) => (
              <Tr key={index}>
                <Td fontFamily='Arsenal SC, cursive'>{inductee.name}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{inductee.year}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default HallOfFame;
