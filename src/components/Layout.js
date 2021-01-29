import s from  './css/layout.module.css';

const Layout = ({ id, title, descr, urlBg = false, colorBg = false }) => {

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
                        { title && <h3>{ title }</h3> }
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        {descr&&<p>{ descr }</p>}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;