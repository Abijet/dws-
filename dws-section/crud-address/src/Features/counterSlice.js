// defining store variable and initilize it
//  the main task of slice is to initialize variable and reinitialize it

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "nitan",
    age: 29,
    isMarried: false,
};

export const counterSlice = createSlice({
    // give name unique
    name: "infoSlice",
    // this name can be any, note the type of the action will be name/reducer eg infoSlice/
    // just rememberr use name unique
    initialState: initialStateValue,
    reducers: {
        changeName:(state, action)=>{
            // state = {...state, name: "ram"}
            // state.name = "ram"
            state.name =  action.payload
        },
        changeAge:(state, action)=>{
            state.age = action.payload
        },
    },
})

export const {changeName, changeAge} = counterSlice.actions;

export default counterSlice.reducer; 