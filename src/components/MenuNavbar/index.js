import { useState } from 'react';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuNavbar = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const handlerChangeNavbar = () => {
    setNavbarActive(!isNavbarActive)
  };

  return (
    <>
        <Menu isNavbarActive={isNavbarActive} />

        <NavBar onChangeNavbar={handlerChangeNavbar} isNavbarActive={isNavbarActive} />
    </>
  );
}

export default MenuNavbar;