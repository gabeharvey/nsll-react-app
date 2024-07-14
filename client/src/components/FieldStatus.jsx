import { Box, Flex, Text } from '@chakra-ui/react';

const FieldStatus = () => {
  const fields = [
    { name: 'Field 1', status: 'Open', updatedTime: '10:00 AM', updatedDate: '2024-07-13' },
    { name: 'Field 2', status: 'Closed for maintenance', updatedTime: '11:30 AM', updatedDate: '2024-07-13' },
    { name: 'Field 3', status: 'Open', updatedTime: '12:15 PM', updatedDate: '2024-07-12' },
    { name: 'Field 4', status: 'Closed due to weather', updatedTime: '1:00 PM', updatedDate: '2024-07-13' },
    { name: 'Field 5', status: 'Open', updatedTime: '1:45 PM', updatedDate: '2024-07-13' },
  ];

  const latestUpdate = fields.reduce((latest, field) => {
    const fieldDateTime = new Date(`${field.updatedDate}T${field.updatedTime}`);
    return fieldDateTime > latest ? fieldDateTime : latest;
  }, new Date(0));

  const formattedUpdateTime = latestUpdate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const formattedUpdateDate = latestUpdate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
      <Text fontSize="lg" color="white" fontFamily="Graduate, sans-serif" mb={5}>
        Last updated: {formattedUpdateDate} at {formattedUpdateTime}
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
