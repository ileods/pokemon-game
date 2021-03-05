import { useState } from 'react';
import Input from '../Input';
import s from  './style.module.css';

const LoginForm = ({onSubmit, textBtn, textSumbit, setModalChange,modalChange}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlerSubmit = (e) => {
        e.preventDefault();

        onSubmit && onSubmit({
            email,
            password
        });

        setEmail('');
        setPassword('');
    }

    const changeModal = () => {
        if (modalChange==='Auth'){
            setModalChange('Login')
        } else {
            setModalChange('Auth')
        }
      }
    

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <Input
                    label="Email"
                    value={email}
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <Input
                    label="Password"
                    value={password}
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                /> 
            </div>
            <div className={s.flex}>
                <button className={s.button} >
                        {textSumbit}
                </button>
                <button className={s.changeBtn} onClick={changeModal}>
                    {textBtn}
                </button>
            </div>
        </form>
    )
}

export default LoginForm;