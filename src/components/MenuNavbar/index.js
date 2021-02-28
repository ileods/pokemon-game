import { useState } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuNavbar = ({ bgActive }) => {
  const [isNavbarActive, setNavbarActive] = useState(null);
  const [isOpenModal, setOpenModal] = useState(true);

  const handlerChangeNavbar = () => {
    setNavbarActive(prevState => !prevState)
  };

  const handlerClickLogin = () =>{
    setOpenModal(prevState => !prevState)
  };

  const handlerSubmitLoginForm = (values) =>{

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
              title="Log in..."
              isOpen={isOpenModal}
              onCloseModal={handlerClickLogin}
        >
          <LoginForm onSubmit={handlerSubmitLoginForm}/>
        </Modal>
    </>
  );
}

export default MenuNavbar;