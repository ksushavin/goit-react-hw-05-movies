import { NavLink } from "react-router-dom";
import styles from 'components/NavBarMenu.module.scss'

export const NavBarMenu = () => {

    const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
}
    return (
        <ul className={styles.navBarMenu}>
            <li className={styles.navBarMenu__item}>
                <NavLink className={getClassName} to="/home" end>Home</NavLink>
            </li>
            <li className={styles.navBarMenu__item}>
                <NavLink className={getClassName} to="/movies">Movies</NavLink>
            </li>
        </ul>
    )
}


