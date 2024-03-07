import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const initialState = {
    name:"",
    image:"",
};
const updateHomePage = () => {
   return dispatch({
    type:"HOME_UPDATE",
    payload:{
   name:"Try to Taste Special Food of the Day",
   image:"./images/img5.jpg",
    },
   }) ;
};

const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState);
    return<AppContext.Provider value = {{...state, updateHomePage}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};
export{AppContext,AppProvider , useGlobalContext};