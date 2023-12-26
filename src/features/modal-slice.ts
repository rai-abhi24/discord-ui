import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalTypes =
    | "createServer"
    | "editServer"
    | "leaveServer"
    | "deleteServer"
    | "invite"
    | "members"
    | "createChannel"
    | "editChannel"
    | "deleteChannel"
    | "messageFile"
    | "deleteMessage";

interface ModalData {
    // server?:
    // channel?:
    // channelType?:
    apiUrl?: string;
    query?: Record<string, any>;
}

interface ModalState {
    type: ModalTypes | null;
    data: ModalData;
    isOpen: boolean;
}

const initialModalState: ModalState = {
    type: null,
    data: {},
    isOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        openModal: (state: ModalState, action: PayloadAction<{ type: ModalTypes; data?: ModalData }>) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.data = action.payload?.data || {};
        },
        closeModal: (state: ModalState) => {
            state.isOpen = false;
            state.type = null;
            state.data = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
