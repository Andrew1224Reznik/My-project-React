import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import style from "./Navbar.module.css";

const Navbar = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${style.navlist__link} ${style.navlist_link_active}`
      : style.navlist__link;

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.navrow}>
          <NavLink to="/" className={style.logo}>
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className={style.navlist}>
            <li className={style.navlist__item}>
              <NavLink to="/" className={setActive}>
                Home
              </NavLink>
            </li>
            <li className={style.navlist__item}>
              <NavLink to="/projects" className={setActive}>
                Projects
              </NavLink>
            </li>
            <li className={style.navlist__item}>
              <NavLink to="/contacts" className={setActive}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
