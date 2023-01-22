import './NavBar.css'
import Avatar from '../Avatar/Avatar'
import SearchBar from '../SearchBar/SearchBar'
import NotificationIcon from '../Applets/NotificationsIcon'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'


function NavBar(props) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap');
      </style>
      <nav>
        <div id="flex-1" className='nav-subdiv'>

          <a href="/">
            <img width="190" src='/src/assets/logo.svg' />
          </a>
          <ul id="nav-links" className={clicked
            ? '#nav-links'
            : '#nav-links active'}>
            <li>
              <a className='active bolder' href="/">Populares</a>
            </li>
            <li>
              <a className='bolder' href="/">Filmes</a>
            </li>
            <li>
              <a className='bolder' href="/">Séries</a>
            </li>
            <li>
              <a className='bolder' href="/">Categorias</a>
            </li>
            <li className="nav-notification-hided">
              <a className='bolder' href="/">Notificações</a>
            </li>
            <li>
              <SearchBar id="hide-searchbar" />
            </li>

          </ul>
        </div>
        <div id="avatar-field" className=''>
          <Avatar profileName="Anderson" profilePicture="/src/assets/profile.jpg" alt="Trocar perfil">
            <NotificationIcon />
          </Avatar>
        </div>
        <div id="nav-mobile">
          {
            clicked
              ? <FaBars onClick={() => setClicked(!clicked)} className='nav-icons' color='var(--base-color-white)' />
              : <AiOutlineCloseCircle onClick={() => setClicked(!clicked)} id="close-icon" className='nav-icons' color='var(--base-color-white)' />
          }
        </div>
      </nav>
    </>
  );
}

export default NavBar