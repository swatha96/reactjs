import React from "react";
import { Link } from "react-router-dom";
import { authSlice } from "../_redux_/authSlice";
import {  useDispatch } from "react-redux";

export function Logout(){

  const slice = authSlice.actions
  const dispatch = useDispatch()

  const clearAuth=()=>{
    dispatch(slice.logout({data:null}));
    console.log("logout")
  }
  return(
    <>
        <button className="user-menu button" type="submit" onClick={()=>clearAuth()}>logout</button>
    </>
  )
}