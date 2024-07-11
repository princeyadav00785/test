import React, { useState, useEffect } from 'react';
import data from '../../data.json'
import './a.css'

const Preferences = () => {
    const [selectedAesthetics, setSelectedAesthetics] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const [showPreferences, setShowPreferences] = useState(true);
  
    const handleSelect = (category, item) => {
      let selectedItems, setSelectedItems;
      if (category === 'aesthetics') {
        selectedItems = selectedAesthetics;
        setSelectedItems = setSelectedAesthetics;
      } else if (category === 'anime') {
        selectedItems = selectedAnime;
        setSelectedItems = setSelectedAnime;
      } else {
        selectedItems = selectedGames;
        setSelectedItems = setSelectedGames;
      }
  
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter(i => i !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };
  
    const handleSave = () => {
      // Handle save logic here
      console.log(selectedAesthetics,selectedAnime,selectedGames)
      setShowPreferences(false); // Hide preferences after saving
    };
  
    return (
      <div className={`preferences ${showPreferences ? '' : 'hidden'}`}>
        <div className="preferences-container">
          <div className="section">
            <h2>Aesthetics</h2>
            <div className="options">
              {data.aesthetics.map(item => (
                <div 
                  key={item} 
                  className={`option ${selectedAesthetics.includes(item) ? 'selected' : ''}`}
                  onClick={() => handleSelect('aesthetics', item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>Anime</h2>
            <div className="options">
              {data.anime.map(item => (
                <div 
                  key={item} 
                  className={`option ${selectedAnime.includes(item) ? 'selected' : ''}`}
                  onClick={() => handleSelect('anime', item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>Games</h2>
            <div className="options">
              {data.games.map(item => (
                <div 
                  key={item} 
                  className={`option ${selectedGames.includes(item) ? 'selected' : ''}`}
                  onClick={() => handleSelect('games', item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    );
  };
  
  export default Preferences;