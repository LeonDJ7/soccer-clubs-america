import { responsiveFontSizes, createTheme } from "@mui/material";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeContextProvider = (props) => {

  const palette = {
    background: {
      main: '#d4d4d4'
    },
    primary: {
      main: '#4e677a'
    },
    secondary: {
      main: '#4b4a59'
    },
    error: {
      main: '#965959'
    },
    warning: {
      main: '#969259'
    },
    success: {
      main: '#599665'
    },
    info: {
      main: '#597896'
    },
  }

  let theme = createTheme({
    palette: {
      background: palette.background,
      primary: palette.primary,
      secondary: palette.secondary,
      error: palette.error,
      warning: palette.warning,
      success: palette.success,
      info: palette.info,
    },
    typography: {
      fontFamily: 'Raleway, sans-serif',
    }
  })
  theme = responsiveFontSizes(theme);

  return (
    <ThemeContext.Provider value={{
      theme,
      palette
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}