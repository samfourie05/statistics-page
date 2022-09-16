import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UserState {
    userName : string
}
const initialState: UserState = { 
    userName : "Sam Fourie"
}

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser(state, action){
            let currentUser = action.payload;
            state.userName = currentUser.userName
        }
    }
})  

export const {setCurrentUser} = currentUserSlice.actions;
export const selectUser = (state:RootState) => state.user.userName;
export default currentUserSlice.reducer;