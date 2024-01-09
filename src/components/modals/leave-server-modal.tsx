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
import { closeModal } from "@/features/modal-slice";
import * as Constants from "@/lib/constants";
import { removeEmojis } from "@/lib/helpers/helpers";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { servers } from "../navigations/navigation-sidebar";

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
            <AlertDialogContent className="overflow-hidden bg-white p-0 dark:bg-[#313338]">
                <AlertDialogHeader className="px-4 pt-4">
                    <AlertDialogTitle>Leave '{serverName}'</AlertDialogTitle>
                    <AlertDialogDescription className="pb-4 pt-2 text-sm text-zinc-200">
                        Are you sure you want leave{" "}
                        <strong>{serverName}</strong>? You won't be able to
                        rejoin the server unless you are re-invited.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="bg-gray-100 px-4 py-4 dark:bg-[#2B2D30]">
                    <AlertDialogCancel className="border-none bg-transparent hover:bg-transparent hover:underline">
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
