import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { sliceAddress } from "../features/address";
import { sliceDetails } from "../features/details";
import { blogApi } from "../BlogServices/blogServices";


export const Store = configureStore({
    reducer:{
        // addresses: sliceAddress.reducer
        // details: sliceDetails.reducer
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([blogApi.middleware])
}) 