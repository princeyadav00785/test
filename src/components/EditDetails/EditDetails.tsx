import React from 'react';
import { X } from 'lucide-react';


type EditDetailsProps = {
  user: string;
  username: string;
  setUser: (user: string) => void;
  setUsername: (username: string) => void;
  visibility: boolean;
  toggle: () => void;
};

const EditDetails: React.FC<EditDetailsProps> = ({
  user,
  username,
  setUser,
  setUsername,
  visibility,
  toggle,
}) => {
  const saveUserDetails = () => {
    // Logic to save user details
    // Example: setUser(newUserValue);
    toggle(); 
  };

  return (
    <div>
      <div
        className={`fixed bottom-0 left-0 w-full h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.7)] z-[1000] transition-opacity duration-300 ${
          visibility ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed bottom-0 bg-white p-5 max-w-[600px] h-[45vh] w-full max-h-[calc(100%-150px)] overflow-y-auto rounded-[10px] shadow-lg">
        <div className="mb-5 bg-white p-4 rounded-lg shadow-md">
        <div className='flex justify-between'>
        <div className="mb-3 text-lg font-bold">Edit User Details</div>
        <button onClick={toggle}><X/></button>
        </div>
        <div className="mb-2">Your Name</div>
         <div className='border border-gray-300 rounded-xl p-5'>
         {/* <label htmlFor="name" className="block">Name</label> */}
        <input
            id="name"
            type="text"
            placeholder={user}
            onChange={(e) => setUser(e.target.value)}
            className=" w-full focus:outline-none focus:border-blue-500"
        />
         </div>
        <div className="mt-3 mb-2">Username</div>
        <input
            id="username"
            type="text"
            placeholder={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md p-5 w-full focus:outline-none focus:border-blue-500"
        />
        <button onClick={saveUserDetails} className="bg-red-500 text-white py-4 px-6 mt-6 rounded-lg w-[95%] mx-auto block">
            Save
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
