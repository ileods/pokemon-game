import { useState } from 'react';

import cn from 'classnames';
import s from  './style.module.css';

const NavBar = ({onChangeNavbar}) => {
    const [isNavbarActive, setNavbarActive] = useState(false);
    
    const handlerClickNavbar = () => {
        setNavbarActive(!isNavbarActive)
        onChangeNavbar && onChangeNavbar(isNavbarActive)
    };

    return (
        <nav id="navbar" className={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active] : isNavbarActive})} >
                <span onClick={handlerClickNavbar}/>
                </a>
            </div>
        </nav>
    )
}

export default NavBar;