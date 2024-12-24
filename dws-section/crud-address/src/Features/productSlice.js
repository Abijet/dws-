// defining store variable and initilize it
//  the main task of slice is to initialize variable and reinitialize it

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    productName: 'Samsung',
    price: 200000,
    quantity: 2,
};

export const productSlice = createSlice({
    // give name unique
    name: "product",
    // this name can be any, note the type of the action will be name/reducer eg infoSlice/
    // just rememberr use name unique
    initialState: initialStateValue,
    reducers: {
        changeProductName: (state)=>{
            state.productName = 'apple'
        },
        changePrice: (state, action)=>{
            state.price = action.payload
        }
    },
})

export const {changeProductName, changePrice} = productSlice.actions;

export default productSlice.reducer; 