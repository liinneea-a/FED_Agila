import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div style={rootStyle}>
      <div style={contentContainerStyle}>
        <div>
          <ul style={listStyle}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#aboutus">About us</a>
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
          </ul>
        </div>
        <div style={iconsStyle}>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
        <div style={listStyle}>
          <p style={{ margin: 0 }}>
            Anders Personsgatan 18
            <br />
            416 64, Göteborg
            <br />
            031-83 28 31
          </p>
        </div>
      </div>
      <p>Copyright</p>
    </div>
  );
}

const rootStyle = {
  paddingTop: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // backgroundColor: "#313131",
  textAlign: "center",
};

const contentContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  textAlign: "left",
  width: "10rem",
};

const iconsStyle = {
  fontSize: "1.5rem",
};
