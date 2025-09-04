import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import { counterReducer, counterslice } from "../../Features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../Features/catalog/catalogAPI";
import { uiSlice } from "../Layout/uiSlice";
import { errorApi } from "../../Features/about/errorApi";

export function configureTheStore() {
    return legacy_createStore (counterReducer);
}

export const store = configureStore({
    reducer: {  [catalogApi.reducerPath]: catalogApi.reducer,
                [errorApi.reducerPath]: errorApi.reducer,
                counter: counterslice.reducer, 
                ui: uiSlice.reducer },
            middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(catalogApi.middleware, errorApi.middleware),
    
});         

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();