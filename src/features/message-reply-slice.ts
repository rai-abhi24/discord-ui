import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IData {
    replyingTo?: string;
}

interface IChatState {
    data: IData;
    isReplying?: boolean;
}

const initialState: IChatState = {
    data: {},
    isReplying: false,
};

const messageReplySlice = createSlice({
    name: "messageReply",
    initialState: initialState,
    reducers: {
        reply: (state: IChatState, action: PayloadAction<{ data: IData }>) => {
            state.isReplying = true;
            state.data = action.payload.data;
        },
        stopReplying: (state: IChatState) => {
            state.isReplying = false;
            state.data = {};
        },
    },
});

export const { reply, stopReplying } = messageReplySlice.actions;
export default messageReplySlice.reducer;
