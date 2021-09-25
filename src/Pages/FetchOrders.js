import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const filter = '';
const value = '';
export const getPurchaseOrdersApiEndPoint = 
  'http://api.weatherapi.com/v1/current.json?key=1278723cb8b747da86f51312212908 &q='+ value + '&aqi=no';



const API_key = '1278723cb8b747da86f51312212908'; 

export const FetchOrders = createAsyncThunk(
    'fetchOrders',
    async(value) => {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=1278723cb8b747da86f51312212908 &q='+ value + '&aqi=no')
    const res2 = await response.json()
    return res2
    // res2[Math.floor(Math.random()*10)].name
    })





 
