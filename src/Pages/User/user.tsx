import { useSelector } from "react-redux";
import Account from "../../Components/Account/account";
import style from "./user.module.scss";
import { RootState } from "../../Store/store";



const User = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const firstName = useSelector((state: RootState) => state.profile.firstName);
  const lastName = useSelector((state: RootState) => state.profile.lastName);
  const userName = `${firstName} ${lastName}`

  return(
    <main className={style.main}>
        <div className={style.header}>
        <h1>Welcome back<br />{userName}!</h1>
        <button className={style.editButton}>Edit Name</button>
      </div>
      <h2 className={style.srOnly}>Accounts</h2>
        <Account title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} description={"Available Balance"}/>
        <Account title={"Argent Bank Savings (x6712)"} amount={"10,928.42"} description={"Available Balance"}/>
        <Account title={"Argent Bank Credit Card (x8349)"} amount={"184.30"} description={"Current Balance"}/>
        
      <p >token:</p><br/>
      <p>{token}</p>
    </main>
    
  )
}

export default User