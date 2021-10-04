import { CheckIcon } from "@chakra-ui/icons";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Features() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              Sunno Iss part ko edit karna h i need svg and baaki sab me bhi svg
              chahiye
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}></Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                69
              </Text>
              <Text color={"gray.500"}>Million</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                5.000 page views
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 automation executions
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50k identified users
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem>
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"green.400"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
            >
              Flash
            </Button>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}

export default Features;
