import {useHistory} from 'react-router-dom';

import s from  './style.module.css';

const Header = ({ title, descr }) => {
    const history = useHistory();

    const handlerClick = () => {
        history.push('/game');
    };

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                { title && <h1>{ title }</h1> }
                {descr&&<p>{ descr }</p>}
                <button className={s.buttonStart} onClick={handlerClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;