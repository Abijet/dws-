import { createSlice } from "@reduxjs/toolkit"


const intialStateValue = {
    city: "Kathmandu",
    provience: 3,
} 

export const sliceAddress = createSlice({
    name: "addressSlice",
    initialState: intialStateValue,
    reducers:{
        changeCity: (state, actions)=>{
            state.city = actions.payload
        },
        changeProvience:(state)=>{
            state.provience = 1
        }
    }
})

export const {changeCity, changeProvience} = sliceAddress.actions

export default sliceAddress.reducer