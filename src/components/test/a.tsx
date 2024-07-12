import  { useState } from 'react';
import data from '../../data.json';
import './a.css';


type PreferencesProps = {
  toggle: () => void;
  visibility: boolean;
};

type Category = 'aesthetics' | 'anime' | 'games';

const Preferences: React.FC<PreferencesProps> = ({ toggle, visibility }) => {
  const [selectedAesthetics, setSelectedAesthetics] = useState<string[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<string[]>([]);
  const [selectedGames, setSelectedGames] = useState<string[]>([]);

  const handleSelect = (category: Category, item: string) => {
    let selectedItems: string[], setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
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
    console.log(selectedAesthetics, selectedAnime, selectedGames);
    toggle(); // Call toggle function to hide preferences
  };

  return (
    <div className={`preferences ${visibility ? 'block' : 'hidden'}`}>
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
