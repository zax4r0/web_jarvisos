/* eslint-disable @next/next/link-passhref */
import React from "react";
import {
  chakra,
  HStack,
  // Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { useViewportScroll } from "framer-motion";
import {
  AiFillGithub,
  AiFillHome,
  AiFillTwitterCircle,
  AiOutlineInbox,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "black");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  // const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("black", "white");
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        // ref={ref}
        // shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">JarvisOS</Link>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: "orange.400" }}
                      _focus={{ boxShadow: "none" }}
                      // rightIcon={<IoIosArrowDown />}
                    >
                      <Link href="/">Home</Link>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{ boxShadow: "md" }}
                  ></PopoverContent>
                </Popover>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: "orange.400" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Link href="/Blog">
                    <a>About Us</a>
                  </Link>
                </Button>
                <Flex
                  justify="flex-end"
                  w="full"
                  maxW="824px"
                  align="center"
                  color="gray.400"
                >
                  <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                    <Link href="https://github.com/zax4r0">
                      <Icon
                        as={AiFillGithub}
                        display="block"
                        transition="color 0.2s"
                        w="5"
                        h="5"
                        _hover={{ color: "orange.400" }}
                      />
                    </Link>
                    <Link href="https://twitter.com/zax4r0">
                      <Icon
                        as={AiFillTwitterCircle}
                        display="block"
                        transition="color 0.2s"
                        w="5"
                        h="5"
                        _hover={{ color: "orange.400" }}
                      />
                    </Link>
                  </HStack>
                </Flex>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="grey.400">
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button
                  colorScheme="brand"
                  variant="ghost"
                  size="sm"
                  _hover={{ color: "orange.400" }}
                >
                  Join
                </Button>
              </HStack>
              {/* <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              /> */}
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("black", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
