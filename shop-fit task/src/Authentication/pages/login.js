import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { login,getUserByToken } from "../_redux_/authCrud";
import { authSlice } from "../_redux_/authSlice";
import {  useDispatch } from "react-redux";
import "../../_Styles_/login.scss"

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
 
const slice = authSlice.actions
const [error,setError]=useState(null);
const dispatch = useDispatch();

const saveCustomer=(values)=>{
  login(values.username,values.password)
    .then(({ data: { accessToken} }) => {
      getUserByToken(accessToken)
        .then(response => {
          setError(null)
          dispatch(slice.authUser({data:response.data}));
        })
        .catch(error => {
          error.clientMessage = "Authentication failed";
          setError(error.clientMessage)
          dispatch(slice.catchError({ error}));
        });
    })
    .catch(error => {
      error.clientMessage = "Username or password is incorrect";
      setError(error.clientMessage)
      dispatch(slice.catchError({ error}));
    });
}

  return (
        <div className="login">
          <div className="brand-icon">SHOP FIT</div>
          <Formik
            enableReinitialize={true} 
            initialValues={initialValues} 
            onSubmit={(values) => {
              saveCustomer(values);
            }} 
          >
          {({ handleSubmit }) => (
            <Form className="form container">
              <Field className="textField" name="username" type="text" placeholder="UserName" />
              <br/>
              <Field className="textField" name="password" type="password" placeholder="Password"/>
              <br/>
              <button className="button" type="submit" onClick={() => handleSubmit()}>Sign In</button>
              {error?<div style={{color:"red"}}>{error}</div>:<></>}
            </Form>
          )}
        </Formik>
      </div>
  );
}
