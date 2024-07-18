import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
} from '@chakra-ui/react';
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
      height="80px"
      bgImage="linear-gradient(45deg, #333 25%, transparent 25%, transparent 50%, #333 50%, #333 75%, transparent 75%, transparent)"
      bgSize="10px 10px"
    >
      <Box fontFamily="Staatliches, sans-serif" fontSize="22px" color="skyblue" p={1}>
        <Link cursor="pointer" href='/'>Northside Suburban Little League</Link>
      </Box>
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
          <Flex align="right" fontFamily="Graduate, sans-serif" fontSize="15px" color="white">
            <Link cursor="pointer" mr={4}>
              Register
            </Link>
            <Link cursor="pointer" mr={4} href="/login">
              Log In
            </Link>
            <Link cursor="pointer" mr={4} href="/halloffame">
              Hall of Fame
            </Link>
            <Link cursor="pointer" mr={4} href="/standings">
              Standings
            </Link>
            <Link cursor="pointer" mr={4} href='/fieldstatus'>
              Field Status
            </Link>
          </Flex>
        </Box>
      )}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg="skyblue"
          color="white"
          fontFamily="Graduate, sans-serif"
          _focus={{ outline: 'none', boxShadow: 'none' }}
          _active={{ background: 'transparent' }}
        >
          <DrawerCloseButton _hover={{ cursor: 'pointer' }} mt="8px" />
          <DrawerHeader borderBottom="3px solid white">Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Link onClick={onClose} cursor="pointer" mb={4}>
                Register
              </Link>
              <Link onClick={onClose} cursor="pointer" mb={4} href="/login">
                Log In
              </Link>
              <Link onClick={onClose} cursor="pointer" mb={4} href="/halloffame">
                Hall of Fame
              </Link>
              <Link onClick={onClose} cursor="pointer" mb={4} href='/standings'>
                Standings
              </Link>
              <Link onClick={onClose} cursor="pointer" mb={4} href='/fieldstatus'>
                Field Status
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
