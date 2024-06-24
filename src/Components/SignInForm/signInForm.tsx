import style from "./signInForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile, login } from '../../methods/api';
import { RootState } from "../../Store/store";



const SignInForm = () => {

  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);

  //behavior

  useEffect(() => {
    if (token) {
      fetchUserProfile(token, dispatch);
    }
  }, [token, dispatch, navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ email, password }, dispatch);
      navigate('/profile');
    } catch (error) {
       console.error('Login failed:', error);
    }
  };


  //render
  return (
  <section className={style.signInContent}>
    <FontAwesomeIcon icon={faCircleUser} />
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <label htmlFor="email">Username</label>
        <input type="email" id="email" name="email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className={style.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me"
          >Remember me</label>
      </div>
      <button className={style.signInButton} type="submit">Sign In</button>

      
    </form>
  </section>
  )
}

export default SignInForm