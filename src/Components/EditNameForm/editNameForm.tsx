import { useState } from "react";
import { updateUserProfile } from "../../api/api";
import style from "./editNameForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface EditNameFormProps{
    closeModale: () => void;
}

const EditNameForm: React.FC<EditNameFormProps> = ({closeModale}) => {
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const dispatch = useDispatch();
    const firstName = useSelector((state: RootState) => state.profile.firstName)|| '';
    const lastName = useSelector((state: RootState) => state.profile.lastName)|| '';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await updateUserProfile({firstName: newFirstName, lastName: newLastName}, dispatch)
            closeModale();
        }catch (error) {
            console.error('Update name failed:', error);
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
      <div className={style.buttons}>
      <button className={style.saveButton} type="submit">Save</button>
      <button className={style.closeButton} onClick={closeModale}>Cancel</button>
        </div>
      
    </form>
    </div>)
}

export default EditNameForm