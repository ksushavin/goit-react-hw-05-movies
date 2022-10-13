import { NavLink, useLocation } from "react-router-dom";
import { GetClassName } from "../GetClassName/GetClassName";
import css from 'components/NavBarMenu/NavBarMenu.module.scss';
// import styles from 'components/GetClassName/GetClassName.module.scss';

export const NavBarMenu = () => {
    const location = useLocation();
 
    if (location.pathname.includes("/movies")) {
        return (
            <ul className={css.navBarMenu}>
                <li className={css.navBarMenu__item}>
                    <NavLink className={GetClassName} to="/" end>Home</NavLink>
                </li>
                <li className={css.navBarMenu__item}>
                    <NavLink className={GetClassName} to="/movies">Movies</NavLink>
                </li>
            </ul>
        )
    }
    return (
        <ul className={css.navBarMenu}>
            <li className={css.navBarMenu__item}>
                <NavLink className={GetClassName} to="/" end>Home</NavLink>
            </li>
            <li className={css.navBarMenu__item}>
                <NavLink className={GetClassName} to="/movies" end>Movies</NavLink>
            </li>
        </ul>
    )
}


