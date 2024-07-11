import React, { useState } from 'react';
import { Box, Flex, IconButton, Spacer, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenWidth = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    React.useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="5px"
            bg="black"
            height="60px"
        >
            <Box fontFamily="Staatliches, sans-serif" fontSize="20px" color="skyblue">Northside Suburban Little League</Box>
            <Spacer />
            {isMobile ? (
                <IconButton
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    aria-label="Menu"
                    onClick={onOpen}
                    _hover={{ cursor: 'pointer' }}
                    color="skyblue"
                    _focus={{ outline: 'none', boxShadow: 'none' }}
                    _active={{ background: 'transparent' }}
                />
            ) : (
                <Box display={{ base: 'none', md: 'block' }}>
                    <Flex align="right" fontFamily='Staatliches, sans-serif' fontSize='15px' color='white'>
                        <Box cursor="pointer" mr={4}>Register</Box>
                        <Box cursor="pointer" mr={4}>Log In</Box>
                        <Box cursor="pointer" mr={4}>Field Status</Box>
                    </Flex>
                </Box>
            )}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg='skyblue' color='white' fontFamily='Staatliches, sans-serif'  _focus={{ outline: 'none', boxShadow: 'none' }} _active={{ background: 'transparent' }} >
                    <DrawerCloseButton _hover={{ cursor: 'pointer' }} mt='8px' />
                    <DrawerHeader borderBottom='3px solid white'>Menu</DrawerHeader>
                    <DrawerBody>
                        <Box onClick={onClose} cursor="pointer" mb={4}>Register</Box>
                        <Box onClick={onClose} cursor="pointer" mb={4}>Log In</Box>
                        <Box onClick={onClose} cursor="pointer" mb={4}>Field Status</Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default Navbar;
