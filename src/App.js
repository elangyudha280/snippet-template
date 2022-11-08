import React from 'react';

// navbar component
import Navbar from './component/navbar.jsx'

// jumbotron component 
import Jumbotron from './component/jumbotron.jsx'

// import main content
import MainContent from './component/content.jsx'

function App() {
  return (
    <>
      {/* component navbar */}
      <Navbar/>
      {/* component jumbotorn */}
      <Jumbotron />
      {/* component main content */}
      <MainContent/>
    </>
  );
}

export default App;
