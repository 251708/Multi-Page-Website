
import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "./reducer";
import axios from 'axios';

const AppContext = React.createContext();




// const options = {
//   method: 'GET',
//   url: 'https://fast-food-restaurants-usa-top-50-chains.p.rapidapi.com/restaurants-top/kfc/location/0',
//   headers: {
//     'X-RapidAPI-Key': '4b2e9a980cmshbcb6e07b5c1df45p11e41fjsn2919317b6765',
//     'X-RapidAPI-Host': 'fast-food-restaurants-usa-top-50-chains.p.rapidapi.com'
//   }
// };





const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [results,setresults] = useState([])
  const results = ['a','b']

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Try our special food of the day",
        image: "./images/img7.jpeg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Try our special food",
        image: "./images/img8.jpg",
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const response = await axios.request(options);
      setresults(response.data.restaurants)
    } catch (error) {
      console.error(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage,results}}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };