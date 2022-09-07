
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListItems from './components/NavListItems';

export default function Footer() {
  return (
    <div style={rootStyle}>
      <div className="footer-container" style={contentContainerStyle}>
        <div className="footer-content-section">
          <ul style={listStyle}>
            <ListItems />
          </ul>
        </div>
        <div className="footer-content-section" style={listStyle}>
          <h3>Social links</h3>
          <div className="social-icons-container">  
              <FacebookIcon fontSize="large" className="social-icon"/>            
              <InstagramIcon fontSize="large" className="social-icon"/>      
              <LinkedInIcon fontSize="large" className="social-icon"/>
          </div>
        </div>
        <div style={listStyle} className="footer-content-section">
          <h3>Our address</h3>
          <p style={{ margin: 0 }}>
            Anders Personsgatan 18
            <br />
            416 64, Göteborg
            <br />
            031-83 28 31
          </p>
        </div>
      </div>
      <p>Copyright Creative Point © 2022</p>
    </div>
  );
}

const rootStyle = {
  paddingTop: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const contentContainerStyle = {
  // display: "flex",
  // padding:"1rem",
  // flexDirection:"row",
  // flexWrap: "wrap",
  // justifyContent: "space-between",
  // width: "100%",
};

const listStyle = {
  listStyle: "none",
  textAlign: "left"
};

