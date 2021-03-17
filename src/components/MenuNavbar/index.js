import { useState } from 'react';
import {NotificationManager} from 'react-notifications';

import Modal from '../Modal';
import LoginForm from '../LoginForm';

import Menu from "./Menu";
import NavBar from "./NavBar";
import { useDispatch } from 'react-redux';
import { getUserUpdateAsync } from '../../store/users';

const MenuNavbar = ({ bgActive }) => {
  const [isNavbarActive, setNavbarActive] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const [modalChange, setModalChange] = useState('Auth');
  const dispatch = useDispatch();

  let textBtn, textSumbit;

  const handlerChangeNavbar = () => {
    setNavbarActive(prevState => !prevState)
  };

  const handlerClickLogin = () =>{
    setOpenModal(prevState => !prevState)
  };

  const handlerSubmitLoginForm = async ({ email, password }) =>{
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }
    let responce;

    if(modalChange === 'Auth'){
      responce = await fetch ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCIsxTD2d5jKZ2YWNrraki1OyrdxKPxn4Y', requestOptions).then(res => res.json());
      const pokemonsStart = await fetch('https://reactmarathon-api.herokuapp.com/api/pokemons/starter').then(res => res.json());
    
      for (const item of pokemonsStart.data){
        await fetch(`https://pokemon-game-fc58b-default-rtdb.firebaseio.com/${responce.localId}/pokemons.json?auth=${responce.idToken}`, {
          method: 'POST',
          body: JSON.stringify(item)
        });
      }
    } else {
      responce = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCIsxTD2d5jKZ2YWNrraki1OyrdxKPxn4Y', requestOptions).then(res => res.json());
    }

    if (responce.hasOwnProperty('error')){
      NotificationManager.error(responce.error.message, 'Wrong!')
    } else {
      localStorage.setItem('idToken', responce.idToken);
      NotificationManager.success('Success message');
      dispatch(getUserUpdateAsync());
      handlerClickLogin();
    }
  }

  if (modalChange === 'Auth'){
    textBtn='Login?';
    textSumbit='Sign up';
  } else {
    textBtn='Register?';
    textSumbit='Sign in'
  }

  return (
    <>
        <Menu isNavbarActive={isNavbarActive} onClickClose={handlerChangeNavbar} />

        <NavBar 
          bgActive={bgActive} 
          onChangeNavbar={handlerChangeNavbar} 
          isNavbarActive={isNavbarActive} 
          onClickLogin={handlerClickLogin}
        />
        <Modal 
              title='Auth...'
              isOpen={isOpenModal}
              onCloseModal={handlerClickLogin}
        >
          <LoginForm onSubmit={handlerSubmitLoginForm} 
            setModalChange={setModalChange}
            textBtn={textBtn} 
            modalChange={modalChange}
            textSumbit={textSumbit}
            isResetField={!isOpenModal}
          />
        </Modal>
    </>
  );
}

export default MenuNavbar;