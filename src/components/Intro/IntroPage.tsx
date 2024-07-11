import React, { useState } from 'react';
import { Edit3 ,User,ChevronLeft} from 'lucide-react';

const IntroPage: React.FC = () => {
  const [user, setUser] = useState('Ayush Gupta');
  const [username, setUsername] = useState('gupta_ayush');
  const [interests, setInterests] = useState<string[]>([]); 
  const [visibilty,setVisibility]=useState('block');
  const toggle = ()=>{
    const a= visibilty;
      setVisibility('');
      setUser(a);
      setInterests([]);
      setUsername("");
  }

  return (
    <div className="relative max-w-[600px] max-h-[100vh] bg-gray-600">
      <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
        <button className="text-xl bg-white p-3 rounded-md">
          <ChevronLeft/>
        </button>
        <button onClick={toggle} className="text-xl bg-white  p-3 rounded-md">
          ⚙️
        </button>
      </div>
      <div className="relative top-[50vh] left-[87vw]">
        <button className="text-sm bg-white  pt-2  pb-1 pr-4 pl-4 rounded-md">
          <User/>
          Edit
        </button>
      </div>
      <div className="relative top-[55vh] h-[40vh] bg-white rounded-t-3xl">
        <div className="h-[20%] p-5">
          <div className="flex font-bold text-2xl justify-between">
            {user}
            <div>
              <button className="text-xl  bg-opacity-50 rounded-md">
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
          <button className="text-xl bg-opacity-50 rounded-md">
            <Edit3 />
          </button>
        </div>
        <div className="p-5">
          {interests.length === 0 ? (
            <p>No interests</p>
          ) : (
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default IntroPage;
