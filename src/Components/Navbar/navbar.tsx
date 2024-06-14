import { Link } from "react-router-dom";
import style from "./navbar.module.scss";
import logo from "../../assets/img/argentBankLogo.png";

function NavBar() {

  return (
  <nav className={style.mainNav}>
    <Link to="/Home" className={style.mainNavLogo}>
      <img
        className={style.mainNavLogoImage}
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className={style.srOnly}>Argent Bank</h1>
    </Link>
    <div>
      <Link to="/SignIn" className={style.mainNavItem}>
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
  )
}

export default NavBar