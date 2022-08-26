import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TuneIcon from '@mui/icons-material/Tune';
import { textAlign } from '@mui/system';

export default function SubHero() {
  return (
    <div style={rootStyle}>
      <div style={headlineStyle}>
        <h2>What we do</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus
        </p>
      </div>
      <div style={iconsContainerStyle}>
        <div style={iconsStyle}>
          <EmojiObjectsIcon style={icon}/>

          <p >Great ides for your business</p>
        </div>
        <div style={iconsStyle}>
          <TuneIcon style={icon}/>

          <p>Perfectly tuned for the market</p>
        </div>
        <div style={iconsStyle}>
          <EmojiObjectsIcon style={icon}/>

          <p>Innovative and imoressive</p>
        </div>
      </div>
    </div>
  );
}

const rootStyle = {
  width: "68rem",
  height: '43rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  border: '2px solid red',
};

const headlineStyle = {
  maxWidth: '20rem',
  textAlign: 'center',
};

const iconsContainerStyle = {
  display: 'flex',

};

const iconsStyle = {
  width: '33%',

  padding: '1rem',
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: "24px",
  textAlign: 'center'
};

const icon = {
  fontSize: '150px',
}

