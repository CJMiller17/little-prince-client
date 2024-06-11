import "./Conceited.css";

const Home = ({ onGame }) => {
  return (
    
    <div className="home">
        <div className="title">TYPING GAME</div>
        <div className="author">
            Coding & <br />
            Design by Cody Codes
        </div>
        <button onClick={() => onGame("playGame")} className="btnPlay">
            Play Game
        </button>
    </div>

  );
};

export default Home;
