import './Avatar.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'
import { useState } from 'react';

function Avatar(props) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap');
      </style>
      <div className='avatar-container'>
        <ul className='avatar-itens'>
          <li className='avatar-children' style={{ padding: '0 3px 0 20px' }}>
            {props.children}
          </li>
          <li style={{ padding: '0 3px 0 20px' }}>
            <img className="profile-picture" src={props.profilePicture} alt="Trocar perfil"/>
          </li>
          <li onClick={() => {setClicked(!clicked)}} style={{ padding: '0 3px 0 3px' }}>
            {
              !clicked
              ?<RxTriangleDown className="arrow" size="30px" />
              :<RxTriangleUp className="arrow" color="var(--base-color-purble-light)" size="30px" />
            }
            {
              clicked
              ? <DropdownMenu activated={clicked} profilePicture={props.profilePicture} />
              : <></>
            }
          </li>
        </ul>
      </div>
    </>
  );
}

export default Avatar;