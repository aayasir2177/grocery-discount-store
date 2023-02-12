import React, { useState } from "react";
import Logo from "../assets/logo.png";

import {
  Flex,
  Spacer,
  IconButton,
  useMediaQuery,
  Menu,
  MenuButton,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaAlignJustify } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <Flex
      h="12vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={"white"}
    >
      <Image w={60} src={Logo} />

      <Spacer />

      <Flex alignItems="center" gap={3}>
        {isLargerThanMD ? (
          <>
            <Menu>
              <Link to={"/"}>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                >
                  Home
                </MenuButton>
              </Link>

              <Link to={"/about"}>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                >
                  About
                </MenuButton>
              </Link>
              <Link to={"/contact"}>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  colorScheme="green"
                  size="sm"
                >
                  Contact
                </MenuButton>
              </Link>

              <Link to={"SignUpPage"}>
                <MenuButton
                  as={Button}
                  variant="outline"
                  colorScheme="green"
                  size="sm"
                >
                  Sign Up
                </MenuButton>
              </Link>

              <Link to={"SignInPage"}>
                <MenuButton
                  as={Button}
                  variant="solid"
                  colorScheme="green"
                  size="sm"
                >
                  Login
                </MenuButton>
              </Link>

              <Link to={"CartPage"}>
                <IconButton
                  icon={<HiShoppingCart />}
                  color={"green.400"}
                  size="lg"
                  bgColor={"gray.50"}
                />
              </Link>
            </Menu>
          </>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};

export default Nav;
