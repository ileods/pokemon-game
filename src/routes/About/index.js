import {useHistory } from 'react-router-dom';

import s from './style.module.css';


const AboutPage = () => {
    const history = useHistory();

    const handlerClickButton = () => {
        history.push('/');
    };


    return (
        <>
            <div>
            <h1>Rules</h1>
            <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
            <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <button className={s.buttonBack} onClick={handlerClickButton}>
                    Back to home
                </button>
            </div>
        </>
    );
};

export default AboutPage;