import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
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
        <MenuIcon />
      </div>
    </header>
  );
}
export default Header;
