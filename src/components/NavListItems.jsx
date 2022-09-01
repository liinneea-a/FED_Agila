import { Link, animateScroll as scroll } from 'react-scroll';

export default function ListItems() {
  return (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Services</a>
      </li>
      <li>
        <Link
          activeClass="active"
          to="aboutUs"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          About Us
        </Link>
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
    </>
  );
}
