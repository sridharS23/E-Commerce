import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const  storeDarktMode = localStorage.getItem('DarkMode');
  return storeDarktMode  ? JSON.parse(storeDarktMode) : true; // Default to true if no preference is saved
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoading : false,
        darkMode: getInitialDarkMode()
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true  ;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setDarkMode: (state) => {
           localStorage.setItem('DarkMode', JSON.stringify(!state.darkMode));
           state.darkMode = !state.darkMode;
        }
    }
});

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;