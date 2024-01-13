import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalTypes =
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

export type serverSectionTypes = "text" | "voice" | "video";

interface IModalData {
    server?: any;
    channel?: any;
    channelType?: any;
    message?: any;
    sectionType?: serverSectionTypes;
    apiUrl?: string;
    query?: Record<string, any>;
}

interface IModalState {
    type: ModalTypes | null;
    data: IModalData;
    isOpen: boolean;
}

const initialModalState: IModalState = {
    data: {},
    isOpen: false,
    type: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        openModal: (
            state: IModalState,
            action: PayloadAction<{ type: ModalTypes; data?: IModalData }>,
        ) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.data = action.payload?.data || {};
        },
        closeModal: (state: IModalState) => {
            state.isOpen = false;
            state.type = null;
            state.data = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
