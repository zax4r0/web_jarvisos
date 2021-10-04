import { Center } from "@chakra-ui/layout";
import type { NextPage } from "next";
import React from "react";
import Profile from "../../shared/components/users/User.card";
import Features from "./components/Feature.home";
import Hero from "./components/Hero.home";
import JoinUs from "./components/JoinUS.home";
import Navbar from "./components/Navbar.home";

const Home: NextPage = () => {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Hero></Hero>

      {/* <JoinUs></JoinUs> */}
      {/* <Features></Features> */}
      {/* <Profile></Profile> */}
    </div>
  );
};

export default Home;
