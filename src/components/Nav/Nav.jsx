import s from './Nav.module.css'

function Nav () {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a className={`${s.item} ${s.active}`} href="#">Profile</a></li>
                <li><a className={s.item} href="#">Massages</a></li>
                <li><a className={s.item} href="#">news</a></li>
                <li><a className={s.item} href="#">Music</a></li>
                <li><a className={s.item} href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav