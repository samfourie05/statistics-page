import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    userProfile: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#4F4F77');
    const [currentMode, setCurrentMode] = useState('Light');

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setColor;
        console.log(currentColor);
    }

    const setColor = (e) => {
        setCurrentColor(e.target.value);
        localStorage.setItem('colorMode', e.target.value);
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:clicked});
    }

    return (
    <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setCurrentColor,
            setCurrentMode,
            setMode,
            setColor
        }}
    >
        { children }
    </StateContext.Provider>
    );
}


export const useStateContext = () => useContext(StateContext);