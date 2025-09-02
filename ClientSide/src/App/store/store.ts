import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import { counterReducer, counterslice } from "../../Features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../Features/catalog/catalogAPI";
import { uiSlice } from "../Layout/uiSlice";

export function configureTheStore() {
    return legacy_createStore (counterReducer);
}

export const store = configureStore({
    reducer: {  [catalogApi.reducerPath]: catalogApi.reducer,
                counter: counterslice.reducer, 
                ui: uiSlice.reducer },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(catalogApi.middleware) 
});         

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();