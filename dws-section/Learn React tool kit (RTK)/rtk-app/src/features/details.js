import { createSlice } from "@reduxjs/toolkit"


const friendDetails = {
    name:"Yunik Bhandari",
    age: 19,
}

export const sliceDetails = createSlice({
    name: "friend",
    initialState: friendDetails,
    reducers:{
        changeName: (state, actions)=>{
            state.name = "Dhruv Goyal"
        },
        changeAge:(state, actions)=>{
            state.age = actions.payload
        }
    }
})

export const {changeName, changeAge} = sliceDetails.actions

export default sliceDetails.reducer
