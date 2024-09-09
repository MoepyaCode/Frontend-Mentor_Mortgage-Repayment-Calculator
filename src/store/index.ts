import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const Store = configureStore({
    reducer: {
        // Add reducers here
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type AppState = typeof Store;
export type AppSelector = ReturnType<AppState['getState']>
export type AppDispatch = AppState["dispatch"];