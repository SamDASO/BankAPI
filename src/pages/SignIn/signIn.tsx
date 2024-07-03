import SignInForm from "../../components/SignInForm/signInForm";
import style from "./signIn.module.scss";


function SignIn() {
  

  //render

  return (
    <main className={style.main}>
        <SignInForm/>
    </main>
  );
}

export default SignIn;