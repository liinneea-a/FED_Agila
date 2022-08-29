import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <ul className="headerList">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">
            <LoginIcon />
          </a>
        </li>
      </ul>
      <div className="headerBurger">
        <Button variant="ghost" onClick={onOpen}>
          <MenuIcon />
        </Button>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <a href="/">
                <LoginIcon />
              </a>
            </DrawerHeader>
            <DrawerBody>
              <ul className="burgerList">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Portfolio</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
