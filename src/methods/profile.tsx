import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProfileState {
    firstName: string | null;
    lastName: string | null;
  }
  
  const initialState: ProfileState = {
    firstName: null,
    lastName: null,
  };

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<{ firstName: string; lastName: string }>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
          },
          clearName: (state) => {
            state.firstName = null;
            state.lastName = null;
          },
    }
})

export const {setName, clearName} = profileSlice.actions
export default profileSlice.reducer;
