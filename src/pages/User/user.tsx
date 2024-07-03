import { useSelector } from "react-redux";
import Account from "../../components/Account/account";
import style from "./user.module.scss";
import { RootState } from "../../store/store";
import { useState } from "react";
import EditNameForm from "../../components/EditNameForm/editNameForm";



const User = () => {
  const firstName = useSelector((state: RootState) => state.profile.firstName);
  const lastName = useSelector((state: RootState) => state.profile.lastName);
  const userName = `${firstName} ${lastName}`
  const [isModaleOpen, setIsModaleOpen] = useState(false);

  
  const editModale = () => {
      setIsModaleOpen(true);
  }

  const closeModale = () => {
    setIsModaleOpen(false);
  }

  return(
    <main className={style.main}>
      { isModaleOpen ? (
        <div className={style.header}>
        <h1>Welcome back<br />{userName}!</h1>
      <div className={style.editModale}>
        <EditNameForm closeModale={closeModale}/>
      </div>
      </div>): 
      (<div className={style.header}>
        <h1>Welcome back<br />{userName}!</h1>
        <button className={style.editButton} onClick={editModale}>Edit Name</button>
      </div>
      )}

      <h2 className={style.srOnly}>Accounts</h2>
        <Account title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} description={"Available Balance"}/>
        <Account title={"Argent Bank Savings (x6712)"} amount={"10,928.42"} description={"Available Balance"}/>
        <Account title={"Argent Bank Credit Card (x8349)"} amount={"184.30"} description={"Current Balance"}/>
        
    </main>
    
  )
}

export default User