import ListItems from "./NavListItems";
import Burger from "./burger";
import AccountModal from "./modal";
import "../styles/forms.css";

function Header() {
  return (
    <header id="home">
      <img
        src="/src/assets/logos/logo-and-name-50.png"
        alt="Creative Point Logo"
        className="headerLogo"
      />
      <ul className="headerList">
        <ListItems />
        <li>
          <AccountModal />
        </li>
      </ul>
      <div className="headerBurger">
        <Burger />
      </div>
    </header>
  );
}
export default Header;
