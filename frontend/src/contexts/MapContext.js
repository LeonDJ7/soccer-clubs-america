import React, { createContext } from "react";

export const MapContext = createContext(null)

export const MapContextProvider = (props) => {

  return (
    <MapContext.Provider value={{}}>
      {props.children}
    </MapContext.Provider>
  )
}