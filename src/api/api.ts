import axios from 'axios';
import { AppDispatch } from '../store/store';
import { setToken } from '../store/auth';
import { setName } from '../store/profile';

//TOKEN
interface LoginData {
  email: string;
  password: string;
}

const baseApi = "http://localhost:3001/api/v1";

export const login = async (data: LoginData, dispatch: AppDispatch) => {
  try {
    const response = await axios.post(`${baseApi}/user/login`, data);

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
      `${baseApi}/user/profile`,
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


export const updateUserProfile = async (data: { firstName: string; lastName: string }, dispatch:AppDispatch) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.put(`${baseApi}/user/profile`, data, {
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