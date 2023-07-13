"use client";

import React from "react";
import { ThemeContext } from "./context/ThemeContext";

const UseContextExample = () => {

    const [state, dispatch] = useContext(ThemeContext);

    console.log(state);

    return (
        <div>
            <button onClick={() => dispatch({type: "CHANGE_THEME"})}>Change Theme</button>
            <button onClick={() => dispatch({type: "CHANGE_THEME", payload:20})}>Change Font Size</button>
        </div>
    )
}