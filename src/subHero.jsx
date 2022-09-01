import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TuneIcon from "@mui/icons-material/Tune";
import Headliner from "./components/Headliner";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export default function SubHero() {
  return (
    <div className="section">
      <Headliner
        title="What We Do"
        text="We are a all-in-one front-line team in which your business can reach new levels of customer connectivity."
      />

      <div style={iconsContainerStyle}>
        <div style={iconsStyle}>
          <EmojiObjectsIcon style={icon} />
          <p className="largePText">Great ides for your business</p>
        </div>
        <div style={iconsStyle}>
          <TuneIcon style={icon} />
          <p className="largePText">Perfectly tuned for the market</p>
        </div>
        <div style={iconsStyle}>
          <ElectricBoltIcon style={icon} />
          <p className="largePText">Innovative and impressive</p>
        </div>
      </div>
    </div>
  );
}

const iconsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const iconsStyle = {
  width: "15.6rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  fontSize: "24px",
  textAlign: "center",
};

const icon = {
  fontSize: "150px",
};
