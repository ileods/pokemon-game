import cn from 'classnames';
import s from  './style.module.css';

import logo from '../../../img/logo.svg'
import { useHistory } from 'react-router-dom';

import {ReactComponent as LoginSVG} from '../../../img/login.svg';

const NavBar = ({onChangeNavbar, isNavbarActive, onClickLogin, bgActive = false}) => {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <div className={s.brand} onClick={goHome}>
                    <img className={s.logo} src={logo} alt="logo"></img>
                </div>
                <div className={s.loginAndMenu}>
                    <div 
                        className={s.loginWrap}
                        onClick={onClickLogin}
                    >
                        <LoginSVG />
                    </div>
                    <div className={cn(s.menuButton, {[s.active] : isNavbarActive})} onClick={onChangeNavbar} >
                        <span />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;