import { createSlice } from "@reduxjs/toolkit";

export const homeSlice=createSlice({
    name:"home",
    initialState:{
        isHomeScreen:true,
        loading:true,
    },
    reducers:{
        updateHomeScreen(state){
            state.isHomeScreen=false;
        },
        stopLoading(state){
            state.loading=false;
        },
    },                                                                                                                                                                                                                                

})