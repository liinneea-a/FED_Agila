import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import ListItems from "./NavListItems";

function Header() {
  return (
    <header>
      <ul className="headerList">
       <ListItems/>
        <li>
          <a href="/">
            <LoginIcon />
          </a>
        </li>
      </ul>
      <div className="headerBurger">
        <MenuIcon />
      </div>
    </header>
  );
}
export default Header;
