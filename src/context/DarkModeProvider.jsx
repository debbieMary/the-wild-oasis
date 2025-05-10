import { createContext, useContext, useEffect } from "react";
import  {useLocalStorageState} from "../hooks/useLocalStorageState"

const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
  const [isDarkMode,  setIsDarkMode] = useLocalStorageState(window.matchMedia("(prefers-color-scheme:dark").matches, "isDarkMode");

  useEffect(function(){
    if(isDarkMode){
      document.documentElement.classList.remove("light-mode")
      document.documentElement.classList.add("dark-mode")
     
    }else{
      document.documentElement.classList.remove("dark-mode")
      document.documentElement.classList.add("light-mode")
    }
   
  }, [isDarkMode]);

  function toogleDarkMode(){
    setIsDarkMode((isDark)=>!isDark)
  }

  return <DarkModeContext.Provider value={{isDarkMode, toogleDarkMode}}>{children}</DarkModeContext.Provider>
}
function useDarkMode(){
  const context = useContext(DarkModeContext)
  if(context  ===  undefined){
    throw new Error("Could not use dark mode because was used outside darkmode provider");
  }
  return context;
}

export {DarkModeProvider ,  useDarkMode}