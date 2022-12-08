import { useState } from "react";

export const getModeFromLocalStorage = () =>{
    let mode = localStorage.getItem("mode");
    if(mode === null) return "light";
    return mode;
}

const DarkMode = ({ setGlobalMode }) =>{
    
    const setModeInLocalStorage = (value) =>{
        localStorage.setItem("mode", value);
        setCurrentMode(getModeFromLocalStorage())
        setGlobalMode(getModeFromLocalStorage())

    }

    const [currentMode, setCurrentMode] = useState(getModeFromLocalStorage())
    return(
        <>
            <button onClick={()=>{
                currentMode === "light" ? setModeInLocalStorage("dark") : setModeInLocalStorage("light")
            }}>Dark Mode</button>
        </>
    )
}

export default DarkMode;