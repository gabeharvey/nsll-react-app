import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const Standings = () => {
  // Sample data for standings
  const baseballStandings = [
    { team: 'Team A', wins: 10, losses: 2, ties: 1 },
    { team: 'Team B', wins: 8, losses: 4, ties: 0 },
    { team: 'Team C', wins: 7, losses: 5, ties: 0 },
  ];

  const softballStandings = [
    { team: 'Team X', wins: 12, losses: 1, ties: 0 },
    { team: 'Team Y', wins: 9, losses: 4, ties: 0 },
    { team: 'Team Z', wins: 6, losses: 7, ties: 0 },
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
        Baseball Standings
      </Text>
      <Box boxShadow="md" p={5} rounded="md" bg="white" width={['95%', '80%']} mb={10} overflowX="auto" css={scrollbarStyle}>
        <Table variant="striped" colorScheme="blue" size="sm">
          <Thead>
            <Tr>
              <Th fontFamily='Arsenal SC, cursive'>Team</Th>
              <Th fontFamily='Arsenal SC, cursive'>Wins</Th>
              <Th fontFamily='Arsenal SC, cursive'>Losses</Th>
              <Th fontFamily='Arsenal SC, cursive'>Ties</Th>
            </Tr>
          </Thead>
          <Tbody>
            {baseballStandings.map((team, index) => (
              <Tr key={index}>
                <Td fontFamily='Arsenal SC, cursive'>{team.team}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{team.wins}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{team.losses}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{team.ties}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Text fontSize="2xl" color="white" fontFamily="Graduate, sans-serif" mb={10}>
        Softball Standings
      </Text>
      <Box boxShadow="md" p={5} rounded="md" bg="white" width={['95%', '80%']} overflowX="auto" css={scrollbarStyle}>
        <Table variant="striped" colorScheme="yellow" size="sm">
          <Thead>
            <Tr>
              <Th fontFamily='Arsenal SC, cursive'>Team</Th>
              <Th fontFamily='Arsenal SC, cursive'>Wins</Th>
              <Th fontFamily='Arsenal SC, cursive'>Losses</Th>
              <Th fontFamily='Arsenal SC, cursive'>Ties</Th>
            </Tr>
          </Thead>
          <Tbody>
            {softballStandings.map((team, index) => (
              <Tr key={index}>
                <Td fontFamily='Arsenal SC, cursive'>{team.team}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{team.wins}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{team.losses}</Td>
                <Td fontFamily='Arsenal SC, cursive'>{team.ties}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Standings;
