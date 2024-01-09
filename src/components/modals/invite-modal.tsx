import { Check, Copy, Hash, Volume2Icon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import * as Constants from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { closeModal } from "@/features/modal-slice";
import { useOrigin } from "@/hooks/useOrigin";
import { removeEmojis } from "@/lib/helpers/helpers";
import { cn } from "@/lib/utils/utils";
import { RootState } from "@/store/store";
import { servers } from "../navigations/navigation-sidebar";

export const InviteModal = () => {
    const origin = useOrigin();
    const dispatch = useDispatch();

    const [copied, setCopied] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)
    const serverName = removeEmojis(servers[0].name);

    const { isOpen, type, data } = useSelector(
        (state: RootState) => state.modal,
    );

    const isModalOpen = isOpen && type === Constants.MODAL_TYPE_INVITE;

    const handleClose = () => {
        dispatch(closeModal());
    };

    const onCopy = () => {
        navigator.clipboard.writeText(origin);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    // TODO: Add functionality of generate new link

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="overflow-hidden bg-white p-0 dark:bg-[#313338]">
                <DialogHeader className="px-4 pt-4">
                    <DialogTitle className="text-md font-normal">
                        Invite friends to <strong>{serverName}'s</strong> server
                    </DialogTitle>
                    {Object.keys(data).length !== 0 && (
                        <div className="text-md mb-2 flex items-center gap-x-1 text-zinc-400">
                            {data?.channel?.type == "text" ? (
                                <Hash className="h-5 w-5" />
                            ) : (
                                <Volume2Icon className="h-5 w-5" />
                            )}
                            {data?.channel?.name}
                        </div>
                    )}
                </DialogHeader>
                <div className="mb-8 px-4">
                    <DialogDescription className="text-[13px] text-zinc-500/70 dark:text-[#B1B6BD]">
                        Share this link with others to grant access to your
                        server
                    </DialogDescription>
                    <div className="mt-2 flex items-center gap-x-4">
                        <Input
                            className="border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-[#1E1F22] dark:text-white"
                            value={origin}
                            readOnly
                        />
                        <Button
                            className={cn(
                                copied
                                    ? "bg-green-600 hover:bg-green-600/70"
                                    : "bg-indigo-500 hover:bg-indigo-500/70",
                            )}
                            onClick={onCopy}
                        >
                            {copied ? (
                                <Check className="h-4 w-4 text-white" />
                            ) : (
                                <Copy className="h-4 w-4 text-white" />
                            )}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
