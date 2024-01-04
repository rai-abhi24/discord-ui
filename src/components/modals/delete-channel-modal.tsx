import { useDispatch, useSelector } from "react-redux"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "../ui/alert-dialog"
import { RootState } from "@/store/store"
import { MODAL_TYPE_DELETE_CHANNEL } from "@/lib/constants"
import { closeModal } from "@/features/modal-slice"

export const DeleteChannelModal = () => {
    const dispatch = useDispatch()
    const { data, isOpen, type } = useSelector((state: RootState) => state.modal)

    const isModalOpen = isOpen && type === MODAL_TYPE_DELETE_CHANNEL;

    return (
        <AlertDialog open={isModalOpen} onOpenChange={() => dispatch(closeModal())}>
            <AlertDialogContent className="p-0 bg-white dark:bg-[#313338] overflow-hidden">
                <AlertDialogHeader className="p-4">
                    <AlertDialogTitle className="text-xl mb-2">Delete Channel</AlertDialogTitle>
                    <AlertDialogDescription className="dark:text-white text-zinc-700 text-sm">
                        Are you sure you want to delete <strong className="text-indigo-400">{data ? "#" + data?.channel?.name : "this channel"}</strong> ? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="p-4 bg-gray-100 dark:bg-[#2B2D30]">
                    <AlertDialogCancel className="outline-none border-none bg-transparent hover:underline hover:bg-transparent text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 text-white hover:bg-red-600/80 rounded">
                        Delete Channel
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}