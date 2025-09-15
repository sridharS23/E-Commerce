import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import { counterReducer, counterslice } from "../../Features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../Features/catalog/catalogAPI";
import { uiSlice } from "../Layout/uiSlice";
import { errorApi } from "../../Features/about/errorApi";
import { basketApi } from "../../Features/basket/basketApi";
import { catalogSlice } from "../../Features/catalog/catalogSlice";
import { accountApi } from "../../Features/account/accountApi";
import { checkoutApi } from "../../Features/checkout/checkoutApi";


export function configureTheStore() {
    return legacy_createStore (counterReducer);
}

export const store = configureStore({
    reducer: {  [catalogApi.reducerPath]: catalogApi.reducer,
                [errorApi.reducerPath]: errorApi.reducer,
                [basketApi.reducerPath]: basketApi.reducer,
                [accountApi.reducerPath]: accountApi.reducer,
                [checkoutApi.reducerPath]: checkoutApi.reducer,
                counter: counterslice.reducer, 
                ui: uiSlice.reducer,
                catalog: catalogSlice.reducer
            },
            middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(
            catalogApi.middleware,
            errorApi.middleware,
            basketApi.middleware,
            accountApi.middleware,
            checkoutApi.middleware
            )
    
});         

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();