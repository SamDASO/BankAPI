import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
  userToken: string | null;
}

const initialState: AuthState = {
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    clearToken: (state) => {
      state.userToken = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
