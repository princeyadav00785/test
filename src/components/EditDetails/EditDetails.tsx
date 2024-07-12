import React from 'react';

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
    // Example: setUsername(newUsernameValue);
    toggle(); // Example: Close the modal after saving
  };

  return (
    <div>
      <div
        className={`fixed bottom-0 left-0 w-full h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.7)] z-[1000] transition-opacity duration-300 ${
          visibility ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed bottom-0 bg-white p-5 max-w-[600px] h-[45vh] w-full max-h-[calc(100%-150px)] overflow-y-auto rounded-[10px] shadow-lg">
          <div className="mb-5">
            <div>Edit User Details.</div>
            <div>Your Name</div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder={user}
              onChange={(e) => setUser(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <div>Username</div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <button onClick={saveUserDetails} className="bg-blue-500 text-white py-2 px-4 mt-3 rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
