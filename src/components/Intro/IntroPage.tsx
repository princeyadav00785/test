import React, { useState } from 'react';
import { Edit3, ChevronLeft } from 'lucide-react';
import Preferences from '../test/a'; // Adjust import path as per your file structure

const IntroPage: React.FC = () => {
  const [user, setUser] = useState('Ayush Gupta');
  const [username, setUsername] = useState('gupta_ayush');
  const [interests, setInterests] = useState<string[]>([]);
  const [visibility, setVisibility] = useState(false);

  const toggle = () => {
    setVisibility(prevVisibility => !prevVisibility);
  };

  const sample = () => {
    setUser('');
    setUsername('');
    setInterests([]);
  };

  const addInterests = (selectedItems: string[]) => {
    setInterests([...interests, ...selectedItems]);
  };

  return (
    <div className="relative max-w-[600px] h-[900px] max-h-[100vh] bg-gray-600">
      <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
        <button onClick={sample} className="text-xl bg-white p-3 rounded-md">
          <ChevronLeft />
        </button>
        <button onClick={toggle} className="text-xl bg-white p-3 rounded-md">
          ⚙️
        </button>
      </div>
      <div className="relative top-[50vh] left-[84vw]">
        {/* Content */}
      </div>
      <div className="relative top-[55vh] min-h-[45vh] bg-white rounded-t-3xl">
        <div className="h-[20%] p-5">
          <div className="flex font-bold text-2xl justify-between">
            {user}
            <div>
              <button className="text-xl bg-opacity-50 rounded-md">
                <Edit3 />
              </button>
            </div>
          </div>
          <div className="mt-2 mb-4">
            {username}
          </div>
        </div>
        <div className="mt-10">
          <hr />
        </div>
        <div className="p-5 flex font-bold text-2xl justify-between">
          <h1 className="font-semibold">Interests</h1>
          <button onClick={toggle} className="text-xl bg-opacity-50 rounded-md">
            <Edit3 />
          </button>
        </div>
        <div className="p-5 ">
            {interests.length === 0 ? (
              <p className="text-gray-500">No interests</p>
            ) : (
              <div className="flex flex-wrap ">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 border border-gray-300 rounded-full px-4 py-2 m-2 cursor-pointer transition-colors duration-300"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>
      <Preferences toggle={toggle} visibility={visibility} addInterests={addInterests} />
    </div>
  );
};

export default IntroPage;
