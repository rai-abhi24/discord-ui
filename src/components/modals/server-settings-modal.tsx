import { closeModal } from "@/features/modal-slice";
import { MODAL_TYPE_SERVER_SETTINGS } from "@/lib/constants";
import { RootState } from "@/store/store";
import { ImagePlus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { servers } from "../navigations/navigation-sidebar";
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const ServerSettingsModal = () => {
    const dispatch = useDispatch();
    const { isOpen, type } = useSelector((state: RootState) => state.modal);

    const isModalopen = isOpen && type === MODAL_TYPE_SERVER_SETTINGS;

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <Dialog open={isModalopen} onOpenChange={handleClose}>
            {/* <DialogTrigger></DialogTrigger> */}
            <DialogContent className="flex h-full min-w-full bg-[#313338] p-0">
                <div className="flex h-full w-1/3 flex-col border-r-2 bg-[#2B2D30]"></div>
                <div className="w-2/3 px-10 py-16">
                    <div className="h-full max-w-[80%]">
                        <Label className="block text-lg">Server Overview</Label>
                        <div className="flex flex-[1_1_50%] py-2">
                            <div className="flex w-1/2">
                                <div className="relative mt-4 flex w-28 flex-col overflow-hidden p-1">
                                    <img
                                        src={servers[0].imageUrl}
                                        className="rounded-full"
                                    />
                                    <ImagePlus className="absolute right-0 h-8 w-8 rounded-full bg-[#E3E5E8] p-1.5 text-gray-500" />
                                    <span className="mt-1 cursor-pointer text-center text-sm text-gray-400 transition hover:text-gray-300">
                                        Remove
                                    </span>
                                </div>
                                {/* <div>We recommended an image of at least 512x512 for the server</div> */}
                            </div>
                            <div className="w-1/2">
                                <Label className="text-xs font-bold uppercase text-zinc-500/70 dark:text-[#B1B6BD]">
                                    Server Name
                                </Label>
                                <Input
                                    className="mt-2 border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-[#1E1F22] dark:text-white"
                                    value={servers[0].name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
