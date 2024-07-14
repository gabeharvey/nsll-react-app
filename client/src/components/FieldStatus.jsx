import { Box, Flex, Text } from '@chakra-ui/react';

const FieldStatus = () => {
  // Sample data for field status
  const fields = [
    { name: 'Field 1', status: 'Open' },
    { name: 'Field 2', status: 'Closed for maintenance' },
    { name: 'Field 3', status: 'Open' },
    { name: 'Field 4', status: 'Closed due to weather' },
    { name: 'Field 5', status: 'Open' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'green.500';
      case 'Closed':
      case 'Closed for maintenance':
      case 'Closed due to weather':
        return 'red.500';
      default:
        return 'gray.500';
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="skyblue" p={5} textAlign="center">
      <Text fontSize="2xl" color="white" fontFamily="Graduate, sans-serif" mb={10}>
        Field Status
      </Text>
      <Flex direction="column" width={['95%', '80%']} bg="white" p={5} boxShadow="md" rounded="md">
        {fields.map((field, index) => (
          <Box
            key={index}
            p={4}
            mb={4}
            bg="gray.100"
            rounded="md"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            fontFamily="Graduate, sans-serif"
          >
            <Text fontSize="xl">{field.name}</Text>
            <Text fontSize="xl" color={getStatusColor(field.status)}>
              {field.status}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default FieldStatus;
