import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button colorScheme="blackAlpha" bg="none" color="black" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Link to="/">
                <Text my="4" mx="2">
                  Home
                </Text>
              </Link>
              <Link to="/allproducts">
                <Text my="4" mx="2">
                  Designer Collection
                </Text>
              </Link>
              <Link to="/lehengas">
                <Text my="4" mx="2">
                  Lehengas
                </Text>
              </Link>
              <Link to="/suits">
                <Text my="4" mx="2">
                  Suits
                </Text>
              </Link>
              <Link to="/gowns">
                <Text my="4" mx="2">
                  Gowns
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
