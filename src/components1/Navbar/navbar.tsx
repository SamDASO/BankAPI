import { Link } from "react-router-dom";
import style from "./navbar.module.scss";
import logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { signOut } from "../../api/api";

const NavBar = () => {

  const token = useSelector((state: RootState) => state.auth.token);
  const firstName = useSelector((state: RootState) => state.profile.firstName);
  const dispatch = useDispatch();
  
  function handleSignOut() {
    signOut(dispatch);
  }

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
    { !token ? (
    <div>
      <Link to="/login" className={style.mainNavItem} >
      <FontAwesomeIcon icon={faCircleUser}/>
        Sign In
      </Link>
    </div>
      ) : (
        <div className={style.divProfile}>
      <Link to="/profile" className={style.mainNavItem} aria-label="user profile">
      <FontAwesomeIcon icon={faCircleUser} />
        {firstName}
      </Link>
      <Link to="/" onClick={handleSignOut} className={style.mainNavItem}>
      <FontAwesomeIcon icon={faRightFromBracket} />
        Sign out
      </Link>
    </div>
      )
    }
  </nav>
  )
}

export default NavBar