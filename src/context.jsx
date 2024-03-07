import React from "react";
const AppContext = React.createContext();
const AppProvider = ({children}) => {
    return<AppContext.Provider value = "sakshi">{children}</AppContext.Provider>
};
export{AppContext,AppProvider};