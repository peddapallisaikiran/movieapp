import {configureStore} from "@reduxjs/toolkit";
import searchReducers from "./search";
import watcherSaga from "../sagas";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        search: searchReducers
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({think: false}). prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);

export default store;