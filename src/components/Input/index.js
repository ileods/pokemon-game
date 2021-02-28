import s from  './style.module.css';

const Input = ({value, label, type, name, onChange}) => {

    return (
        <div className={s.root}>
            <input 
                type={type? type: "text"} 
                className={s.input} 
                name={name} 
                onChange={onChange} 
                required 
                value={value} 
            />
            <span className={s.highlight}></span>
            <span className={s.bar}></span>
            <label className={s.label}>{label}</label>
        </div>
    )
}

export default Input;