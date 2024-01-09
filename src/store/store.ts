import { combineReducers, configureStore } from "@reduxjs/toolkit";

import modalReducer from "../features/modal-slice";

type RootState = ReturnType<typeof rootReducer>;
type ModalReducerType = ReturnType<typeof modalReducer>;

const rootReducer = combineReducers({
    modal: modalReducer,
});
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export type { ModalReducerType, RootState };

export default store;
