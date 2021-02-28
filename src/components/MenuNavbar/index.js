import { useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuNavbar = ({ bgActive }) => {
  const [isNavbarActive, setNavbarActive] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handlerChangeNavbar = () => {
    setNavbarActive(prevState => !prevState)
  };

  const handlerClickLogin = () =>{
    setOpenModal(prevState => !prevState)
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
          <Input
            label="Email"
            // value={email}
            name="email"
            onChange={(val) => {console.log(val)}}
          />
          <Input
            label="Password"
            // value={password}
            type="password"
            name="password"
            onChange={(val) => {console.log(val)}}
          />
          <LoginForm onSubmit={handlerClickLogin}/>
        </Modal>
    </>
  );
}

export default MenuNavbar;