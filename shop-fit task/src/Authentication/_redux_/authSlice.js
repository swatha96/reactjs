import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
    user:null,
    accessToken:"",
    isAuthorized:false,
    error:null,
    entities:""
  };
  export const callTypes = {
    list: "list",
    action: "action"
  };

  export const authSlice = createSlice({
    name: "auth",
    initialState: initialUserState,
    reducers: {
      catchError: (state, action) => {
          state.error = `${action.type}: ${action.payload.error}`;
      },
      authUser: (state, action) => {
        const {  data } = action.payload;
        state.isAuthorized = true;
        state.user = data;
      },

      logout: (state,action)=>{
        state.user = null;
        state.isAuthorized = false;
      }
     
      }
});