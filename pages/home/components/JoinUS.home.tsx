import { SiTelegram } from "react-icons/si";
import {
  Box,
  Button,
  Center,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function JoinUs() {
  return (
    <Center p={8}>
      <Button
        w={"full"}
        maxW={"md"}
        colorScheme={"telegram"}
        leftIcon={<SiTelegram />}
      >
        <Link
          isExternal
          aria-label="Go to  JARVIS-OS GitHub page"
          href="https://t.me/zax4r0"
        >
          <Text>Telegram Support Group</Text>
        </Link>
        {/* </Center> */}
      </Button>
    </Center>
  );
}
