import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProfileState {
    firstName: string | null;
    lastName: string | null;
  }
  
  const initialState: ProfileState = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
  };

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<{ firstName: string; lastName: string }>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('lastName', action.payload.lastName);
          },
          clearName: (state) => {
            state.firstName = null;
            state.lastName = null;
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
          },
    }
})

export const {setName, clearName} = profileSlice.actions
export default profileSlice.reducer;
