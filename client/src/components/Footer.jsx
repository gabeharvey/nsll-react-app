import { Box, Flex, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            as="footer"
            bg="black"
            color="skyblue"
            py={4}
            fontFamily="Graduate, sans-serif"
        >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                mx="auto"
                maxW="1200px"
                px={4}
            >
                <Box fontSize="20px" mb={{ base: 4, md: 0 }}>
                    &copy; {new Date().getFullYear()} Northside Suburban Little League
                </Box>
                <Flex>
                    <Link href="#" mx={2} _hover={{ textDecoration: 'underline', color: 'white' }}>
                        About Us
                    </Link>
                    <Link href="#" mx={2} _hover={{ textDecoration: 'underline', color: 'white' }}>
                        Contact
                    </Link>
                    <Link href="#" mx={2} _hover={{ textDecoration: 'underline', color: 'white' }}>
                        Privacy Policy
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;