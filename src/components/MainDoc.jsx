import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {FetchOrders} from "../Pages/FetchOrders";
import ControllableStates from "../search";
import {dispatching} from "../search";



import '../App.css';


const MainDoc = () => {
 
    const dispatch = useDispatch();
    const city = useSelector((state) => state.location.name);
    const country = useSelector((state) => state.location.country);
    const temp_c = useSelector((state) => state.current.temp_c);
    const temp_f = useSelector((state) => state.current.temp_f);
    const localtime = useSelector((state) => state.location.localtime);
    const humidity = useSelector((state) => state.current.humidity);
    // const status = useSelector((state) => state.MainDoc.status);
    // const error = useSelector((state) => state.MainDoc.error);


    const filter = 'california';
    const data = []

    // useEffect(() => {
    //     // send HTTP request
    //     dispatch(FetchOrders(filter));
    //     // save response to variable
    // }, [dispatch, filter])

    const changename = () => {
        dispatch(ControllableStates());
    }  

   
  

    return (
        <>
        <div >
            <h1> City Weather Statistics</h1>
            <ControllableStates />

            <table>
                <tr>
                <th>City Name :</th>
                <td> {city}</td>
                </tr>
                <tr>
                    <th>Country :</th>
                    <td> {country}</td>
                </tr>
                <tr>
                    <th>Temp_c :</th>
                    <td> {temp_c} °</td>
                </tr>
                <tr>
                    <th>Temp_f : </th>
                    <td> {temp_f} °</td>
                </tr>
                <tr>
                    <th>Localtime : </th>
                    <td> {localtime}</td>
                </tr>
                <tr>
                    <th>Humidity : </th>
                    <td> {humidity}</td>
                </tr>
            </table>
            <button onClick = {() =>changename()}> Update Details</button>

        </div>
        </>
    );
};

export default MainDoc



