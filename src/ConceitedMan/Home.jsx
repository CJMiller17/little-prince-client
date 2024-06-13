import "./Conceited.css";

const Home = ({ onGame }) => {
  return (
    
    <div className="home">
        <div className="title">The Conceited Man</div>
        <div className="author">
            Asteroid 326
        </div>
        <button onClick={() => onGame("playGame")} className="btnPlay">
            Play Game
        </button>
    </div>

  );
};

export default Home;
