import {useHistory } from 'react-router-dom';

import s from './style.module.css';


const ContactPage = () => {
    const history = useHistory();

    const handlerClickButton = () => {
        history.push('/');
    };


    return (
        <>
            <div>
                <p> This page Contact </p>
                <button className={s.buttonBack} onClick={handlerClickButton}>
                    Back to home
                </button>
            </div>
        </>
    );
};

export default ContactPage;