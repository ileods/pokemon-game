import { useState } from 'react';
import Input from '../Input';
import s from  './style.module.css';

const LoginForm = ({onSubmit}) => {
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
            <button className={s.button} >
                    Login
            </button>
        </form>
    )
}

export default LoginForm;