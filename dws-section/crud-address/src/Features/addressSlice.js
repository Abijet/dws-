import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    city: "Kathmandu",
    provience: 3,
};

export const addressSlice = createSlice({
    // give name unique
    name: "addressSlice",
    // this name can be any, note the type of the action will be name/reducer eg infoSlice/
    // just rememberr use name unique
    initialState: initialStateValue,
    reducers: {
        changeCity: (state)=>{
            state.city = "Birtamode"

        },
        changeProvience: (state, action)=>{
            state.provience= action.payload
        }
    },
})

export const {changeCity, changeProvience} = addressSlice.actions;

export default addressSlice.reducer; 