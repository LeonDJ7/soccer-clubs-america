import React, { createContext, useState } from "react";

export const DataContext = createContext(null)

export const DataContextProvider = (props) => {

  const [leagues, setLeagues] = useState({})
  const [clubs, setClubs] = useState({})

  return (
    <DataContext.Provider value={{leagues, clubs}}>
      {props.children}
    </DataContext.Provider>
  )
}