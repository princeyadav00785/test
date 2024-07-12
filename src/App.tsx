// src/App.tsx
import React from 'react';
import IntroPage from './components/Intro/IntroPage';
// import Preferences from './components/test/a';

const App: React.FC = () => {
  return (
    <div className="max-w-[600px] m-auto">
    {/* <div> */}
      <IntroPage />
      {/* <Preferences/> */}
    </div>
  );
};

export default App;
