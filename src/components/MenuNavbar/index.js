import { useState } from 'react';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuNavbar = ({ bgActive }) => {
  const [isNavbarActive, setNavbarActive] = useState(null);

  const handlerChangeNavbar = () => {
    setNavbarActive(prevState => !prevState)
  };

  return (
    <>
        <Menu isNavbarActive={isNavbarActive} onClickClose={handlerChangeNavbar} />

        <NavBar bgActive={bgActive} onChangeNavbar={handlerChangeNavbar} isNavbarActive={isNavbarActive} />
    </>
  );
}

export default MenuNavbar;