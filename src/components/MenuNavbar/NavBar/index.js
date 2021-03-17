import cn from 'classnames';
import s from  './style.module.css';

import logo from '../../../img/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {ReactComponent as LoginSVG} from '../../../img/login.svg';
import {ReactComponent as UserSVG} from '../../../img/user.svg';
import { selectLocalID, selectUserLoading } from '../../../store/users';

const NavBar = ({onChangeNavbar, isNavbarActive, onClickLogin, bgActive = false}) => {
    const isLoadingUser = useSelector(selectUserLoading);
    const localId = useSelector(selectLocalID);

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
                    { (!isLoadingUser && !localId) && (
                        <div 
                            className={s.loginWrap}
                            onClick={onClickLogin}
                        >
                            <LoginSVG />
                        </div>
                    )}
                    { (!isLoadingUser && localId) && (
                        <Link 
                            className={s.loginWrap}
                            to="/user"
                        >
                            <UserSVG />
                        </Link>
                    )}
                    <div className={cn(s.menuButton, {[s.active] : isNavbarActive})} onClick={onChangeNavbar} >
                        <span />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;