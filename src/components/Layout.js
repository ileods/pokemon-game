import s from  './css/layout.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {

    return (
        <section className={s.root} id={ id ? id : null }>
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