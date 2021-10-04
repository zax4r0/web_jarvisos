import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button variant="unstyled" onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <IconButton
            variant="unstyled"
            aria-label="MoonIcon"
            icon={<MoonIcon />}
          />
        ) : (
          <IconButton
            variant="unstyled"
            aria-label="SunIcon"
            icon={<SunIcon />}
          />
        )}
      </Button>
    </header>
  );
}
import React from "react";

function DarkModeButton() {
  return (
    <div>
      <DarkModeToggle></DarkModeToggle>
    </div>
  );
}

export default DarkModeButton;
