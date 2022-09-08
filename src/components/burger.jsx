import { slide as Menu } from 'react-burger-menu'
import '../styles/burger.css'
import ListItems from './NavListItems'
import { useState } from 'react'

const Burger = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)


  const handleclick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Menu right {...props} isOpen={menuOpen}>
      <ListItems handleClick={handleclick} />
    </Menu>
  )
}

export default Burger
