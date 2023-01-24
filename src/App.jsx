import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LineDiv from './components/Applets/LineDiv'
import NavBar  from './components/NavBar/NavBar'
import FullLenghtPosters from './components/FullLenghtPosters/FullLenghtPosters'
import './App.css'
import MovieCard from './components/MovieCard/MovieCard'
import MovieRow from './components/MovieRow/MovieRow'



function App() {

  return (
    <>
      <NavBar />
      <div className='body-div'>
        <FullLenghtPosters />
        <LineDiv />
        <MovieRow />
      </div>
    </>
    );
  }

export default App
