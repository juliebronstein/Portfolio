import React, { useEffect, useState } from 'react'
import { createContext } from "react";


export const colorTemContext=createContext({
    colors:"",
        setColors:()=>{},
})

export const ColorTemContainer = ({children}) => {
    const [colors, setColors] = useState({primaryColor:"color-1",backColor:"bg-1"})
    useEffect(() => {
      const colorSave = JSON.parse(localStorage.getItem('colors'));
      if (colorSave) {
        setColors(colorSave)
      }
    }, []);
  return (
    <colorTemContext.Provider value={{
     colors,
     setColors
    }}>
        {children}
    </colorTemContext.Provider>
  )
}