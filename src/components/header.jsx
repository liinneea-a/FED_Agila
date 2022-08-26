import LoginIcon from '@mui/icons-material/Login';

function Header() {

  return (
    <header>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/"><LoginIcon/></a></li>
        </ul>
    </header>
  )
}
export default Header