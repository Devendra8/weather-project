import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import {FetchOrders} from "./FetchOrders";

export const initialState = {
    location:"",
    current:"",
    // todayCases:"", 

    status: false,
    error: ""
}

const UserReducer = createSlice({
    name: 'empty',
    initialState,
    reducers:{

    },
    extraReducers:{
        [FetchOrders.pending]: (state) => {
            state.status = "loading";
            state.name = "loading";
        },

        [FetchOrders.fulfilled]:(state, action) => {
            state.status = "suceeded";
            state.location = action.payload.location;
            state.current = action.payload.current;

         },

        [FetchOrders.rejected]:(state, action) => {
            state.status = "failed";
            state.error = action.error.message;

        }

    }
})

export const FetchOrders1 = UserReducer.actions;

//export const {} = UserReducer.actions
export default UserReducer.reducer;
