import './DropdownMenu.css'

function DropdownMenu(props) {

  return (
    <>
      <div>
        <ul id="drop-itens" className={props.activated 
                       ? '#drop-itens'
                       : '#drop-itens activated'}>
          <li className='drop-item'>{props.profileName}</li>
          <li className='drop-item'>Meus Favoritos</li>
          <li className='drop-item'>Alterar Perfil</li>
          <li className='drop-item'>Configurações</li>
          <li className='drop-item'>Ajuda</li>
          <li className='drop-item'>Sair</li>
        </ul>
      </div>
    </>
  );
}

export default DropdownMenu;