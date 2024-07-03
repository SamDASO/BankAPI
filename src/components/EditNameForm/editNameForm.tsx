import { useState } from "react";
import { updateUserProfile } from "../../api/api";
import style from "./editNameForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface EditNameFormProps{
    hideForm: () => void;
}

const EditNameForm: React.FC<EditNameFormProps> = ({hideForm}) => {
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const firstName = useSelector((state: RootState) => state.profile.firstName)|| '';
    const lastName = useSelector((state: RootState) => state.profile.lastName)|| '';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage("");
        try {
            await updateUserProfile({firstName: newFirstName, lastName: newLastName}, dispatch)
            hideForm();
        }catch (error) {
            console.error('Update name failed:', error);
            setErrorMessage("Erreur lors de la sauvegarde, veuillez réessayer");
         }
    }


    return(
    <div className={style.divForm}>
    <form onSubmit={handleSubmit}>
      <div className={style.nameDiv}>
        <input type="text" id="firstName" name="firstName"
            placeholder={firstName} value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} required />
      
        <input type="text" id="lastName" name="lastName"
            placeholder={lastName} value={newLastName} onChange={(e) => setNewLastName(e.target.value)} required />
      </div>
      { errorMessage && <div className={style.error}>{errorMessage}</div>}
      <div className={style.buttons}>
      <button className={style.saveButton} type="submit">Save</button>
      <button className={style.closeButton} onClick={hideForm}>Cancel</button>
        </div>
      
    </form>
    </div>)
}

export default EditNameForm