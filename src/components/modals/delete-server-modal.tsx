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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { closeModal } from "@/features/modal-slice";
import * as Constants from "@/lib/constants";
import { removeEmojis } from "@/lib/helpers/helpers";
import { RootState } from "@/store/store";
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
            <AlertDialogContent className="overflow-hidden bg-white p-0 dark:bg-[#313338]">
                <AlertDialogHeader className="px-4 pt-4">
                    <AlertDialogTitle className="mb-2 text-xl">
                        Delete '{serverName} server'
                    </AlertDialogTitle>
                    <AlertDialogDescription className="rounded bg-[#AF772B] px-2 py-3 text-sm text-white dark:bg-[#F0B141]">
                        Are you sure you want delete "
                        <strong>{serverName}</strong>" server? This action
                        cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="px-4">
                    <Label className="text-xs font-bold uppercase text-zinc-500/70 dark:text-[#B1B6BD]">
                        Enter server name
                    </Label>
                    <Input
                        className="mt-2 border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-[#1E1F22] dark:text-white"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {error && (
                        <p className="mt-2 text-xs text-red-400">{error}</p>
                    )}
                </div>
                <AlertDialogFooter className="bg-gray-100 px-4 py-4 dark:bg-[#2B2D30]">
                    <AlertDialogCancel
                        className="border-none bg-transparent text-zinc-500/90 hover:bg-transparent hover:underline focus:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0"
                        onClick={handleClose}
                    >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="rounded bg-red-500 text-white hover:bg-red-600/80"
                        onClick={() => matchServerName()}
                    >
                        Leave Server
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
