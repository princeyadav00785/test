import React, { useState } from 'react';
import { Edit3, ChevronLeft,User } from 'lucide-react';
import Preferences from '../Preferance/Preferance'; // Adjust import path as per your file structure
import EditDetails from '../EditDetails/EditDetails';
import bgImage from '../../assets/Bg.png';

const IntroPage: React.FC = () => {
  const [user, setUser] = useState('Ayush Gupta');
  const [username, setUsername] = useState('gupta_ayush');
  const [interests, setInterests] = useState<string[]>([]);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const toggle = () => {
    setVisibility(prevVisibility => !prevVisibility);
  };
  const toggle2 = () => {
    setVisibility2(prevVisibility => !prevVisibility);
  };


  const addInterests = (selectedItems: string[]) => {
    setInterests([...interests, ...selectedItems]);
  };

  return (
          <div className="relative max-w-[600px] h-[900px] max-h-[100vh]"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
        <button  className="text-xl bg-white p-3 rounded-md">
          <ChevronLeft />
        </button>
        <button onClick={toggle} className="text-xl bg-white p-3 rounded-md">
          ⚙️
        </button>
      </div>
      <div className="relative top-[50vh] left-[84vw]">
        <div className="absolute top-[-50px] left-[-18px] flex justify-between p-4">
        <button className="text-sm bg-white p-2 pr-4 pl-4 rounded-md">
          <User/>
          <div className='mt-1'>Edit</div>
        </button>
      </div>
      </div>
      <div className="relative top-[55vh] min-h-[45vh] bg-white rounded-t-3xl">
        <div className="h-[20%] p-5">
          <div className="flex font-bold text-2xl justify-between">
            {user}
            <div>
              <button onClick={toggle2} className="text-xl bg-opacity-50 rounded-md">
                <Edit3 />
              </button>
            </div>
          </div>
          <div className="mt-2 mb-3">
            {username}
          </div>
        </div>
        <div className="">
          <hr />
        </div>
        <div className="p-2 ml-4 mr-3 flex font-bold text-xl justify-between">
          <h1 className="font-semibold">Interests</h1>
          <button onClick={toggle} className="text-xl ">
            <Edit3 />
          </button>
        </div>
        <div className="p-5">
            {interests.length === 0 ? (
              <p className="text-gray-500">No interests</p>
            ) : (
              <div className="flex flex-wrap ">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F5F5] border border-gray-300 rounded-full px-4 py-2 m-2 cursor-pointer transition-colors duration-300 text-md"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>
      <Preferences toggle={toggle} visibility={visibility} addInterests={addInterests} />
      <EditDetails toggle={toggle2} visibility={visibility2} user={user} username={username} setUser={setUser} setUsername={setUsername} />
    </div>
  );
};

export default IntroPage;
