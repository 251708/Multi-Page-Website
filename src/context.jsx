import React, { useContext, useReducer } from "react";
const AppContext = React.createContext();
const initialState = {
    name:"",
    image:"",
};


const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState);
    return<AppContext.Provider value = {{...state}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};
export{AppContext,AppProvider , useGlobalContext};