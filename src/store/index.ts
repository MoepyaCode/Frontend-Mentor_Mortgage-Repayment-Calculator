import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import MortgageReducer from "./features";

export const Store = configureStore({
    reducer: {
        mortgage: MortgageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type AppState = typeof Store;
export type AppSelector = ReturnType<AppState['getState']>
export type AppDispatch = AppState["dispatch"];