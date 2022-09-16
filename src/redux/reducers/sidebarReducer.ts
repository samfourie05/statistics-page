import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface SidebarState{
    isSidebarOpen : boolean
}

const initialState: SidebarState = {
    isSidebarOpen: true
}

const sideBarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        setSidbarOpen(state, action){
            state.isSidebarOpen = action.payload
        }
    }

})

export const {setSidbarOpen} = sideBarSlice.actions;
export const sidebar = (state:RootState) => state.sidebar.isSidebarOpen;
export default sideBarSlice.reducer;