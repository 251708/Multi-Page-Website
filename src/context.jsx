import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const initialState = {
    name:"",
    image:"",
};
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

const updateHomePage = () => {
   return dispatch({
    type:"HOME_UPDATE",
    payload:{
   name:"Try to Taste Special Food of the Day",
   image:"./images/img5.jpg",
    },
   }) ;
};

const updateAboutPage = () => {
    return dispatch({
     type:"ABOUT_UPDATE",
     payload:{
    name:"Try to Taste Special Food ",
    image:"./images/img3.jpg",
     },
    }) ;
 };
 return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
    return useContext(AppContext);
};

export{AppContext,AppProvider , useGlobalContext};