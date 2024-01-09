import { closeModal } from "@/features/modal-slice";
import { MODAL_TYPE_DELETE_CHANNEL } from "@/lib/constants";
import { RootState } from "@/store/store";
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
} from "../ui/alert-dialog";

export const DeleteChannelModal = () => {
    const dispatch = useDispatch();
    const { data, isOpen, type } = useSelector(
        (state: RootState) => state.modal,
    );

    const isModalOpen = isOpen && type === MODAL_TYPE_DELETE_CHANNEL;

    return (
        <AlertDialog
            open={isModalOpen}
            onOpenChange={() => dispatch(closeModal())}
        >
            <AlertDialogContent className="overflow-hidden bg-white p-0 dark:bg-[#313338]">
                <AlertDialogHeader className="p-4">
                    <AlertDialogTitle className="mb-2 text-xl">
                        Delete Channel
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm text-zinc-700 dark:text-white">
                        Are you sure you want to delete{" "}
                        <strong className="text-indigo-400">
                            {data ? "#" + data?.channel?.name : "this channel"}
                        </strong>{" "}
                        ? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="bg-gray-100 p-4 dark:bg-[#2B2D30]">
                    <AlertDialogCancel className="border-none bg-transparent text-zinc-500 outline-none hover:bg-transparent hover:underline focus-visible:ring-0 focus-visible:ring-offset-0">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="rounded bg-red-500 text-white hover:bg-red-600/80">
                        Delete Channel
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
