import { useState } from "react";
import { updateUserProfile } from "../../api/api";
import style from "./editNameForm.module.scss";
import { useDispatch } from "react-redux";

interface EditNameFormProps{
    closeModale: () => void;
}

const EditNameForm: React.FC<EditNameFormProps> = ({closeModale}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await updateUserProfile({firstName, lastName}, dispatch)
            closeModale();
        }catch (error) {
            console.error('Update name failed:', error);
         }
    }


    return(
    <div className={style.divForm}>
        <h1>Edit Name</h1>
    <form onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <label htmlFor="firstName">Firstname</label>
        <input type="firstName" id="firstName" name="firstName"
            value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor="lastName">Lastname</label>
        <input type="lastName" id="lastName" name="lastName"
            value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <button className={style.saveButton} type="submit">Save</button>

      
    </form>
    </div>)
}

export default EditNameForm