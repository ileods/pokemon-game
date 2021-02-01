import cn from 'classnames';

import s from  './style.module.css';

const Layout = ({ id, title, urlBg = false, colorBg = false, colorTitle, children }) => {

    const style = {};
    if (urlBg) { 
        style.backgroundImage=`url(${urlBg})`
    }; 
    if (colorBg) { 
        style.backgroundColor=colorBg 
    };

    return (
        <section className={s.root} id={ id || null } style={style}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        { title && <h3 style = { colorTitle&&{color: colorTitle}}>{ title }</h3> }
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc,s.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;