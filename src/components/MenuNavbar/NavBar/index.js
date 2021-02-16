import cn from 'classnames';
import s from  './style.module.css';

import logo from '../../../img/logo.svg'
import { useHistory } from 'react-router-dom';

const NavBar = ({onChangeNavbar, isNavbarActive, bgActive = false}) => {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand} onClick={goHome}>
                    <img className={s.logo} src={logo} alt="logo"></img>
                </p>
                <div className={cn(s.menuButton, {[s.active] : isNavbarActive})} onClick={onChangeNavbar} >
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;