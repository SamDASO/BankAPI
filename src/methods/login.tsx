import axios from 'axios';
import { Dispatch } from 'redux';
import { setToken } from '../methods/auth';

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials, dispatch: Dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
    const token = response.data.token;
    if (token) {
      dispatch(setToken(token));
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
