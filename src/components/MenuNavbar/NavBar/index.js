import cn from 'classnames';
import s from  './style.module.css';

const NavBar = ({onChangeNavbar, isNavbarActive}) => {
    
    const handlerClickNavbar = () => {
        onChangeNavbar&&onChangeNavbar()
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