import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Maincontent from './Maincontent';
import Container from '@mui/material/Container';
import Intro from './Intro';  

function App() {
  const [showIntro, setShowIntro] = useState(true); //to show the intro screen
  const handleSkipIntro = () => {
    setShowIntro(false); //when click on the arrow the intro screen will disappear
  };

  return (
    <>
      {showIntro ? (
        <Intro onSkip={handleSkipIntro} /> //if showIntro is true the intro screen will appear
      ) : (   //if showIntro is false the main content will appear
        <>
          <header className="header">
            <h1>مواعيد الصلاة</h1>
          </header>
          <div className="App">
            <Container maxWidth="xl">
              <Maincontent />
            </Container>
          </div>
          <footer
            style={{
              backgroundColor: 'black',
              width: '100vw',
              height: '50px',
              marginTop: '100px',
              padding: '10px',
              zIndex: 2,
            }}
          >
            <p style={{ color: 'white', textAlign: 'center', marginTop: '2px' }}>
              . 2025 Rah00m All rights reserved ©
            </p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
