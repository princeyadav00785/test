import React, { useState } from 'react';
import data from '../../data.json'; // Adjust import path as per your file structure

type PreferencesProps = {
  toggle: () => void;
  visibility: boolean;
  addInterests: (selectedItems: string[]) => void;
};

type Category = 'aesthetics' | 'anime' | 'games';

const Preferences: React.FC<PreferencesProps> = ({ toggle, visibility, addInterests }) => {
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
    const allSelectedItems = [...selectedAesthetics, ...selectedAnime, ...selectedGames];
    addInterests(allSelectedItems); // Call addInterests function to add selected items to interests
    toggle(); // Call toggle function to hide preferences
  };

  return (
    <div className={`fixed top-[90px] left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.7)] z-[1000] transition-opacity duration-300 ${visibility ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white p-5 max-w-[600px] w-full max-h-[calc(100%-40px)] overflow-y-auto rounded-[10px] shadow-lg">
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Aesthetics</h2>
          <div className="flex flex-wrap">
            {data.aesthetics.map(item => (
              <div
                key={item}
                className={`bg-gray-200 border border-gray-300 rounded-full px-4 py-2 m-1 cursor-pointer transition-colors duration-300 ${selectedAesthetics.includes(item) ? 'bg-red-500 text-white border-red-500' : ''}`}
                onClick={() => handleSelect('aesthetics', item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Anime</h2>
          <div className="flex flex-wrap">
            {data.anime.map(item => (
              <div
                key={item}
                className={`bg-gray-200 border border-gray-300 rounded-full px-4 py-2 m-1 cursor-pointer transition-colors duration-300 ${selectedAnime.includes(item) ? 'bg-red-500 text-white border-red-500' : ''}`}
                onClick={() => handleSelect('anime', item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Games</h2>
          <div className="flex flex-wrap">
            {data.games.map(item => (
              <div
                key={item}
                className={`bg-gray-200 border border-gray-300 rounded-full px-4 py-2 m-1 cursor-pointer transition-colors duration-300 ${selectedGames.includes(item) ? 'bg-red-500 text-white border-red-500' : ''}`}
                onClick={() => handleSelect('games', item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <button className="block bg-red-500 text-white border-none rounded-full px-6 py-2 m-auto cursor-pointer transition-colors duration-300 hover:bg-red-400" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Preferences;
