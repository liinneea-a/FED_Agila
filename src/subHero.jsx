import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function SubHero() {
  return (
    <div style={rootStyle}>
      <div style={textStyle}>
        <h2>What we do</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus
        </p>
      </div>
      <div style={iconsContainerStyle}>
        <div style={iconsStyle}>
          <EmojiObjectsIcon />

          <p>Great ides for your business</p>
        </div>
        <div style={iconsStyle}>
          <EmojiObjectsIcon />

          <p>Perfectly tuned for the market</p>
        </div>
        <div style={iconsStyle}>
          <EmojiObjectsIcon />

          <p>Innovative and imoressive</p>
        </div>
      </div>
    </div>
  );
}

const rootStyle = {
  width: "100%",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid red',
};

const textStyle = {
  border: '2px solid blue',
  maxWidth: '20rem',
  textAlign: 'center',
};

const iconsContainerStyle = {
  display: 'flex',

};

const iconsStyle = {
  width: '33%',
  border: '2px solid green',
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center'
};
