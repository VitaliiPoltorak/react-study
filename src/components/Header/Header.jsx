import logo from "../../logo.svg"
import s from './Header.module.css'

function Header () {
    return (
        <header className={s.header}>
            <img className={s.img} src={logo} alt=" logo"/>
        </header>
    )
}

export default Header