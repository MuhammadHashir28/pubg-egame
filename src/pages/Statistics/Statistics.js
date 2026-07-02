import { useState } from "react";
import { Link } from "react-router-dom";
import "./Statistics.css";
import OCRButton from "../../components/OCRButton/OCRButton";

function Statistics() {
  const [games, setGames] = useState([
    { id: 1, map: "", uploadData: {} },
    { id: 2, map: "", uploadData: {} },
    { id: 3, map: "", uploadData: {} },
    { id: 4, map: "", uploadData: {} }
  ]);

  const [parentState, setParentState] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    scoreSystem: "2023 point System",
    players: "3 Player",
    tags: "3 Tags"
  });

  const handleOCRComplete = (ocrResults) => {
    setParentState(ocrResults);
  };

  const handleMapChange = (gameId, selectedMap) => {
    setGames(prevGames => prevGames.map(game => {
      if (game.id === gameId) {
        return { ...game, map: selectedMap };
      }
      return game;
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileInputRef = useState(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="statistics-page">
      {/* Hero Section */}
      <section className="stats-hero">
        <div className="stats-hero-bg">
          <div className="stats-glow"></div>
        </div>
        <div className="container">
          <div className="stats-hero-content">
            <span className="page-badge">Score Tracking</span>
            <h1 className="page-title">
              Match <span className="text-gradient">Scorecard</span>
            </h1>
            <p className="page-description">
              Upload your match results or enter them manually to track your performance and climb the leaderboard.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Content */}
      <section className="stats-content">
        <div className="container">
          <div className="stats-grid">
            {/* Upload Section */}
            <div className="stats-upload">
              <div className="upload-header">
                <div className="upload-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <h2>Upload Match Score</h2>
                <p>Upload your match screenshots or enter data manually</p>
              </div>
              
              <div className="upload-preview">
                <img src={require('../../images/tournament-transparent.png')} alt="Upload Preview" />
              </div>
            </div>

            {/* Form Section */}
            <div className="stats-form">
              <h2 className="form-title">Match Details</h2>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Team Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter team name"
                    className="input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Match Date</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="dd/mm/yyyy"
                    className="input"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                  Settings
                </h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="scoreSystem">Point System</label>
                    <select
                      id="scoreSystem"
                      name="scoreSystem"
                      value={formData.scoreSystem}
                      onChange={handleInputChange}
                      className="input select"
                    >
                      <option>2024 Point System</option>
                      <option>2023 Point System</option>
                      <option>2022 Point System</option>
                      <option>Custom</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="players">Players Required</label>
                    <select
                      id="players"
                      name="players"
                      value={formData.players}
                      onChange={handleInputChange}
                      className="input select"
                    >
                      <option>2 Player</option>
                      <option>3 Player</option>
                      <option>4 Player</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="tags">Number of Tags</label>
                    <select
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="input select"
                    >
                      <option>2 Tags</option>
                      <option>3 Tags</option>
                      <option>4 Tags</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="games-section">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Game Details
                </h3>
                
                {games.map((game, index) => (
                  <div key={game.id} className="game-row">
                    <span className="game-label">Game {game.id}</span>
                    <select
                      value={game.map}
                      onChange={(e) => handleMapChange(game.id, e.target.value)}
                      className="input select"
                    >
                      <option value="">Select Map</option>
                      <option>Erangel</option>
                      <option>Miramar</option>
                      <option>Sanhok</option>
                      <option>Vikendi</option>
                    </select>
                    <button className="upload-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      OCR Upload
                    </button>
                  </div>
                ))}
                
                <button className="add-game-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add more games
                </button>
              </div>

              <button className="btn btn-primary btn-full">
                Submit Scorecard
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
