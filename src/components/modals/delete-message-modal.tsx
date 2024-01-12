import { closeModal } from "@/features/modal-slice";
import { MODAL_TYPE_DELETE_MESSAGE } from "@/lib/constants";
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
import { UserAvatar } from "../user-avatar";

export const DeleteMessageModal = () => {
    const {
        isOpen,
        type,
        data: { message },
    } = useSelector((state: RootState) => state.modal);

    const isModalOpen = isOpen && type === MODAL_TYPE_DELETE_MESSAGE;
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(closeModal());
    };

    return (
        <AlertDialog open={isModalOpen} onOpenChange={handleChange}>
            <AlertDialogContent className="overflow-hidden bg-white p-0 dark:bg-[#313338]">
                <AlertDialogHeader className="px-4 pt-4">
                    <AlertDialogTitle className="mb-2 text-xl">
                        Delete Message
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[15px] text-zinc-300">
                        Are you sure you want to delete this message?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="px-4">
                    <div className="flex w-full items-start gap-x-2 rounded-sm border px-4 py-3 shadow-[#1e1f2299_0px_0px_10px_1px]">
                        <UserAvatar src={message?.sender?.avatar} />
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-2">
                                <div className="flex items-center">
                                    <p className="text-sm font-bold">
                                        {message?.sender?.name}
                                    </p>
                                </div>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                    {message?.createdAt}
                                </span>
                            </div>
                            <div className="text-sm text-zinc-200">
                                {message?.content}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <p className="text-sm font-bold uppercase text-emerald-500">
                        Protip:
                    </p>
                    <div className="mt-1 text-[12px] text-zinc-400">
                        You can hold down shift when clicking{" "}
                        <strong>delete message</strong> to bypass this
                        confirmation entirely.
                    </div>
                </div>
                <AlertDialogFooter className="bg-gray-100 p-4 dark:bg-[#2B2D30]">
                    <AlertDialogCancel className="border-none bg-transparent outline-none hover:bg-transparent hover:underline focus-visible:ring-0 focus-visible:ring-offset-0">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="rounded bg-red-500 text-white hover:bg-red-600/80">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
