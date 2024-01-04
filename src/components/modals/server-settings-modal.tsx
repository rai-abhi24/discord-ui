import { Plus, ImagePlus } from "lucide-react";
import { servers } from "../navigations/navigation-sidebar";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { FileUpload } from "../file-upload";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/features/modal-slice";
import { RootState } from "@/store/store";
import { MODAL_TYPE_SERVER_SETTINGS } from "@/lib/constants";

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
            <DialogContent className="min-w-full h-full flex p-0 bg-[#313338]">
                <div className="h-full w-1/3 border-r-2 bg-[#2B2D30] flex flex-col"></div>
                <div className="w-2/3 px-10 py-16">
                    <div className="max-w-[80%] h-full">
                        <Label className="text-lg block">Server Overview</Label>
                        <div className="flex flex-[1_1_50%] py-2">
                            <div className="w-1/2 flex">
                                <div className="w-28 overflow-hidden mt-4 flex flex-col relative p-1">
                                    <img src={servers[0].imageUrl} className="rounded-full" />
                                    <ImagePlus className="w-8 h-8 p-1.5 bg-[#E3E5E8] text-gray-500 rounded-full absolute right-0" />
                                    <span className="text-sm text-gray-400 hover:text-gray-300 text-center cursor-pointer transition mt-1">
                                        Remove
                                    </span>
                                </div>
                                {/* <div>We recommended an image of at least 512x512 for the server</div> */}
                            </div>
                            <div className="w-1/2">
                                <Label className="uppercase text-zinc-500/70 dark:text-[#B1B6BD] text-xs font-bold">
                                    Server Name
                                </Label>
                                <Input
                                    className="bg-zinc-300/50 dark:bg-[#1E1F22] border-0 text-black focus-visible:ring-0 dark:text-white focus-visible:ring-offset-0 mt-2"
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
