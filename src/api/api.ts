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
        console.error('Login failed:', error);
        throw error;
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

export const updateUserProfile = async (data: { firstName: string; lastName: string }, dispatch:AppDispatch) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.put(`http://localhost:3001/api/v1/user/profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { firstName, lastName } = response.data.body;
    dispatch(setName({ firstName, lastName }));
  } catch (error) {
    console.error('Failed to update user profile');
  }
};