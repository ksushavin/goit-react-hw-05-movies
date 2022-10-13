
import css from 'components/NavBar/NavBar.module.css';
import { NavBarMenu } from 'components/NavBarMenu/NavBarMenu';


export const NavBar = () => {
  return (
    <nav className={css.navBar}>
      <NavBarMenu />
    </nav>
  )
}





