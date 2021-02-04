import cn from 'classnames';
import s from  './style.module.css';

const NavBar = ({onChangeNavbar, isNavbarActive, bgActive = false}) => {

    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, {[s.active] : isNavbarActive})} onClick={onChangeNavbar} >
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;