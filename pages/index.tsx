import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Home from "./home/home.page";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

const Jarvisos: NextPage = () => {
  return (
    <div className={styles.container}>
      <ChakraProvider theme={theme}>
        <Home></Home>
      </ChakraProvider>
    </div>
  );
};

export default Jarvisos;
