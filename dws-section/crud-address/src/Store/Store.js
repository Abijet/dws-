import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { counterSlice } from "../Features/counterSlice";
import { addressSlice } from "../Features/addressSlice";
import { productSlice } from "../Features/productSlice";
import { getDefaultNormalizer } from "@testing-library/react";
import { productApi } from "../Service/productService";


export const Store = configureStore({
    reducer:{
        // info: counterSlice.reducer,
        address: addressSlice.reducer
        // product: productSlice.reducer

        // [productApi.reducerPath]: productApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productApi.middleware]),
})