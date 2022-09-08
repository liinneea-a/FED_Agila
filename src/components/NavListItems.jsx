export default function ListItems({ handleClick }) {
  return (
    <>
      <li onClick={handleClick}>
        <a href="#home">Home</a>
      </li>
      <li onClick={handleClick}>
        <a href="#skills">Our Stack</a>
      </li>
      <li onClick={handleClick}>
        <a href="#aboutus">About us</a>
      </li>
      <li onClick={handleClick}>
        <a href="#team">Team</a>
      </li>
      <li onClick={handleClick}>
        <a href="#ourworks">Portfolio</a>
      </li>
      <li onClick={handleClick}>
        <a href="#contact">Contact</a>
      </li>
    </>
  )
}
