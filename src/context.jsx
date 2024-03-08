/*import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "https://api.pujakaitem.com/api/products";
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
   dispatch({type:"GET_SERVICES " , payload: data});
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

export{AppProvider , useGlobalContext};
*/
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://rapidapi.com/spoonacular/api/recipe-food-nutrition/";

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Thapa Technical",
        image: "./images/img4.jpg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Vinod Thapa",
        image: "./images/img3.jpg",
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };