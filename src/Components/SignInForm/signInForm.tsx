import { Link } from "react-router-dom";
import style from "./signInForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const SignInForm = () => {

  return (
  <section className={style.signInContent}>
    <FontAwesomeIcon icon={faCircleUser} />
    <h1>Sign In</h1>
    <form>
      <div className={style.inputWrapper}>
        <label htmlFor="username">Username</label><input type="text" id="username" />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor="password">Password</label><input type="password" id="password" />
      </div>
      <div className={style.inputRemember}>
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
          >Remember me</label>
      </div>
      {/* Placeholder text due to static site */}
      <Link to="user" className={style.signInButton}>Sign In</Link>
      {/* The button below is commented out because of the static site */}
      {/* <button className={style.signInButton}>Sign In</button> */}

      
    </form>
  </section>
  )
}

export default SignInForm