
import { configureStore } from "@reduxjs/toolkit";

    import { homeSlice } from "./Reducer/Home/homeslice";


 export default configureStore({
    reducer:{
        home:homeSlice.reducer,
    },
 });