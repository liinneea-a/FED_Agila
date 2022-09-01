import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import Burger from "./burger";
function Header() {
  return (
    <header id="home">
      <ul className="headerList">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="/">
            <LoginIcon />
          </a>
        </li>
      </ul>
      <div className="headerBurger">
        <Burger />
      </div>
    </header>
  );
}
export default Header;
