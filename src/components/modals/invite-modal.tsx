import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import * as Constants from "@/lib/constants";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils/utils";
import { RootState } from "@/store/store";
import { useOrigin } from "@/hooks/useOrigin";
import { closeModal } from "@/features/modal-slice";

export const InviteModal = () => {
    const origin = useOrigin();
    const dispatch = useDispatch();

    const [copied, setCopied] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)

    const { isOpen, type } = useSelector((state: RootState) => state.modal);

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
            <DialogContent className="bg-white dark:bg-[#313338] p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold dark:text-white">Invite Friends</DialogTitle>
                    <div className="p-6">
                        <Label className="uppercase text-zinc-500/70 dark:text-[#B1B6BD] text-xs font-bold">
                            Server invite link
                        </Label>
                        <div className="mt-2 flex gap-x-4 items-center">
                            <Input
                                className="bg-zinc-300/50 dark:bg-[#1E1F22] border-0 text-black focus-visible:ring-0 dark:text-white focus-visible:ring-offset-0"
                                value={origin}
                                readOnly
                            />
                            <Button
                                className={cn(
                                    copied
                                        ? "bg-green-600 hover:bg-green-600/70"
                                        : "bg-indigo-500 hover:bg-indigo-500/70"
                                )}
                                onClick={onCopy}
                            >
                                {copied ? (
                                    <Check className="w-4 h-4 text-white" />
                                ) : (
                                    <Copy className="w-4 h-4 text-white" />
                                )}
                            </Button>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
