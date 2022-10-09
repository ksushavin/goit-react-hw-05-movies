
import css from 'components/NavBar.module.css';
import { NavBarMenu } from './NavBarMenu';


export const NavBar = () => {
  return (
    <nav className={css.navBar}>
      <NavBarMenu />
    </nav>
  )
}





