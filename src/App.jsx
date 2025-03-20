import * as React from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Maincontent from './Maincontent';
import Container from '@mui/material/Container';
function App() {
  return (
    <>
    <header className='header'>
      <h1>مواعيد الصلاة</h1></header>
      <div className="App">
      <Container maxWidth="xl">
					<Maincontent />
				</Container>
      </div>
      <h1>Rah00m</h1>
    </>
  )
}

export default App
