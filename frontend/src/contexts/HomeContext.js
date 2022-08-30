import React, { createContext } from "react";

export const HomeContext = createContext(null)

export const HomeContextProvider = (props) => {

  return (
    <HomeContext.Provider value={{}}>
      {props.children}
    </HomeContext.Provider>
  )
}