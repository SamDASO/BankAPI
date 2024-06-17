import { Link } from "react-router-dom";
import style from "./navbar.module.scss";
import logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  return (
  <nav className={style.mainNav}>
    <Link to="/" className={style.mainNavLogo}>
      <img
        className={style.mainNavLogoImage}
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className={style.srOnly}>Argent Bank</h1>
    </Link>
    <div>
      <Link to="/sign-in" className={style.mainNavItem}>
      <FontAwesomeIcon icon={faCircleUser} />
        Sign In
      </Link>
    </div>
  </nav>
  )
}

export default NavBar