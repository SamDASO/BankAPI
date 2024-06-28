import axios from 'axios';
import { AppDispatch } from '../store/store';
import { clearToken, setToken } from '../store/auth';
import { clearName, setName } from '../store/profile';

//TOKEN
interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData, dispatch: AppDispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', data);

    const token = response.data.body.token;
    if (token) {
      dispatch(setToken(token));
      fetchUserProfile(token, dispatch)
    }
  } catch (error) {
    alert("Erreur d'authentification");
    console.error('Login failed:', error);
  }
};



const fetchUserProfile = async (token: string, dispatch: AppDispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { firstName, lastName } = response.data.body;
    dispatch(setName({ firstName, lastName }));
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
  }
};

export const signOut = (dispatch: AppDispatch) => {
  dispatch(clearToken());
  dispatch(clearName());
};
