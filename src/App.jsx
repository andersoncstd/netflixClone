import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar  from './components/NavBar/NavBar'
import FullLenghtPosters from './components/FullLenghtPosters/FullLenghtPosters'
import './App.css'



function App() {

  return (
    <>
      <NavBar />
      <div className='body-div'>
        <FullLenghtPosters />
      </div>
    </>
    );
  }

export default App
