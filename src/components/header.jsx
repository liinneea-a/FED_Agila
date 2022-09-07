import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import ListItems from "./NavListItems";
import Burger from "./burger";

function Header() {
  return (
    <header id="home">
      <ul className="headerList">
       <ListItems/>
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
