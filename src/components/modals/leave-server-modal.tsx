import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { servers } from "../navigations/navigation-sidebar";
import { removeEmojis } from "@/lib/helpers/helpers";
import { closeModal } from "@/features/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import * as Constants from "@/lib/constants";

export function LeaveServerModal() {
    const dispatch = useDispatch();
    const serverName = removeEmojis(servers[0].name);
    const { isOpen, type } = useSelector((state: RootState) => state.modal);
    const isModalOpen = isOpen && type === Constants.MODAL_TYPE_LEAVE_SERVER;

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <AlertDialog open={isModalOpen} onOpenChange={handleClose}>
            <AlertDialogContent className="bg-white dark:bg-[#313338] p-0 overflow-hidden">
                <AlertDialogHeader className="pt-4 px-4">
                    <AlertDialogTitle>Leave '{serverName}'</AlertDialogTitle>
                    <AlertDialogDescription className="pt-2 pb-4 text-zinc-200 text-sm">
                        Are you sure you want leave <strong>{serverName}</strong>? You won't be able to rejoin the
                        server unless you are re-invited.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="px-4 py-4 bg-gray-100 dark:bg-[#2B2D30]">
                    <AlertDialogCancel className="hover:underline hover:bg-transparent bg-transparent border-none">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 text-white hover:bg-red-500/70">
                        Leave Server
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
