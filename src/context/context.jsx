import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    activeTab: null,
    setActiveTab: () => {},  // created a dummy function and then setting values in this when filling this function by calling the context in any components.
  });

export const ThemeContextProvider = ({children})=>{

    // initial states are defining in the Context.js
    const [activeTab, setActiveTab] = useState("home");
    // Start of LocalStorage Darkmode
    const getTheme = ()=>{
        return JSON.parse(localStorage.getItem("theme")) || false
    }
    const [darkMode, setDarkMode] = useState(getTheme());
    
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(darkMode));
    }, [darkMode]);
    
    // end of LocalStorage Darkmode

    return (    
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode , activeTab , setActiveTab}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}


// export const useThemeContext=()=>{
//     return useContext(ThemeContext);
// }