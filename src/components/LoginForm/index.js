import s from  './style.module.css';

const LoginForm = ({onSubmit}) => {

    return (
        <div>
            <button className={s.button} onClick={onSubmit}>
                    Login
            </button>
        </div>
    )
}

export default LoginForm;