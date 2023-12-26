import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import * as Constants from "@/lib/constants";
import { removeEmojis } from "@/lib/helpers/helpers";
import { RootState } from "@/store/store";
import { closeModal } from "@/features/modal-slice";
import { servers } from "../navigations/navigation-sidebar";

export function DeleteServerModal() {
    const dispatch = useDispatch();
    const serverName = removeEmojis(servers[0].name);
    const { isOpen, type } = useSelector((state: RootState) => state.modal);
    const isModalOpen = isOpen && type === Constants.MODAL_TYPE_DELETE_SERVER;

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleClose = () => {
        setError("");
        dispatch(closeModal());
    };

    const matchServerName = () => {
        if (!value || value.toLowerCase() !== serverName.toLowerCase()) {
            setError("You didn't enter the server name correctly");
            setValue("");
        } else {
            setError("");
            setValue("");
            handleClose();
        }
    };

    return (
        <AlertDialog open={isModalOpen}>
            <AlertDialogContent className="bg-white dark:bg-[#313338] p-0 overflow-hidden">
                <AlertDialogHeader className="pt-4 px-4">
                    <AlertDialogTitle className="text-xl mb-2">Delete '{serverName} server'</AlertDialogTitle>
                    <AlertDialogDescription className="text-white text-sm rounded px-2 py-3 bg-[#AF772B] dark:bg-[#F0B141]">
                        Are you sure you want delete "<strong>{serverName}</strong>" server? This action cannot be
                        undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="px-4">
                    <Label className="uppercase text-xs font-bold text-zinc-500/70 dark:text-[#B1B6BD]">
                        Enter server name
                    </Label>
                    <Input
                        className="bg-zinc-300/50 dark:bg-[#1E1F22] border-0 text-black focus-visible:ring-0 dark:text-white focus-visible:ring-offset-0 mt-2"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
                </div>
                <AlertDialogFooter className="px-4 py-4 bg-gray-100 dark:bg-[#2B2D30]">
                    <AlertDialogCancel
                        className="hover:underline text-zinc-500/90 hover:bg-transparent bg-transparent border-none focus:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0"
                        onClick={handleClose}
                    >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-red-500 text-white hover:bg-red-500/70"
                        onClick={() => matchServerName()}
                    >
                        Leave Server
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
