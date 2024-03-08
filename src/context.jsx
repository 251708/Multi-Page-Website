import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "";
const initialState = {
    name:"",
    image:"",
    services: [],
};
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

const updateHomePage = () => {
   return dispatch({
    type:"HOME_UPDATE",
    payload:{
   name:"Try to Taste Special Food of the Day",
   image:"./images/img1.jpg",
    },
   }) ;
};

const updateAboutPage = () => {
    return dispatch({
     type:"ABOUT_UPDATE",
     payload:{
    name:"Try to Taste Special Food ",
    image:"./images/img7.jpeg",
     },
    }) ;
 };

 const getServices = async(url) => {
  try{
    const res = await fetch(url);
   const data = await res.json();
   dispatch({type:"GET_SERVICES " , payload: data})
  }catch(error){
    console.log(error);
  }
 }

 useEffect(() => {
  getServices(API);
 } , []);
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