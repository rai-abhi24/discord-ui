import { combineReducers, configureStore } from "@reduxjs/toolkit";

import replyMessageReducer from "../features/message-reply-slice";
import modalReducer from "../features/modal-slice";

type RootState = ReturnType<typeof rootReducer>;
type ModalReducerType = ReturnType<typeof modalReducer>;

const rootReducer = combineReducers({
    modal: modalReducer,
    replyMessage: replyMessageReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export type { ModalReducerType, RootState };

export default store;
