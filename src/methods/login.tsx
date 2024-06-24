import axios from 'axios';
import { AppDispatch } from '../Store/store';
import { setToken } from './auth';

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData, dispatch: AppDispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', data);

    const token = response.data.token;
    if (token) {
      dispatch(setToken(token));
    }
  } catch (error) {
    alert("Erreur d'authentification")
    console.error('Login failed:', error);
  }
};
