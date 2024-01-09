import { useEffect, useState } from "react";

import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { ServerSettingsModal } from "@/components/modals/server-settings-modal";
// import { MembersModal } from "@/components/modals/members-modal";
import { DeleteChannelModal } from "@/components/modals/delete-channel-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
// import { EditChannelModal } from "@/components/modals/edit-channel-modal";
// import { MessageFileModal } from "@/components/modals/message-file-modal";
// import { DeleteMessageModal } from "@/components/modals/delete-message-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <ServerSettingsModal />
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
            <DeleteChannelModal />
        </>
    );
};
