import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as Constants from "@/lib/constants";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

import { RootState } from "@/store/store";
import { closeModal } from "@/features/modal-slice";
import { Hash } from "lucide-react";
import { Label } from "../ui/label";
import { CustomChannelTypeField, CustomRadioFieldType } from "../custom/custom-radio-field";

interface IFormValues {
    channelName: string;
    channelType: CustomRadioFieldType;
}

const formInitialValues: IFormValues = {
    channelName: "",
    channelType: "text",
};

const formSchema = z.object({
    channelName: z.string(),
    channelType: z.string(),
});

export const CreateChannelModal: React.FC = () => {
    const dispatch = useDispatch();
    const { isOpen, type } = useSelector((state: RootState) => state.modal);
    const isModalOpen = isOpen && type === Constants.MODAL_TYPE_CREATE_CHANNEL;

    const handleClose = () => {
        dispatch(closeModal());
    };

    const form = useForm({
        defaultValues: formInitialValues,
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<IFormValues> = (values: any) => {
        console.log(values);
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white dark:bg-[#313338] p-0 overflow-hidden">
                <DialogHeader className="pt-4 px-4">
                    <DialogTitle className="text-xl font-normal">Create Channel</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="w-full flex flex-col px-4">
                            <FormField
                                name="channelType"
                                render={({ field }) => (
                                    <div>
                                        <Label className="uppercase text-xs font-bold text-zinc-500/70 dark:text-[#B1B6BD]">
                                            Channel type
                                        </Label>
                                        <div className="mt-1 mb-4 flex flex-col space-y-1">
                                            <CustomChannelTypeField
                                                title="Text"
                                                type="text"
                                                value={field.value}
                                                handleOnChange={field.onChange}
                                            />
                                            <CustomChannelTypeField
                                                title="Voice"
                                                type="voice"
                                                value={field.value}
                                                handleOnChange={field.onChange}
                                            />
                                        </div>
                                    </div>
                                )}
                            />
                            <FormField
                                name="channelName"
                                control={form.control}
                                render={({ field }) => (
                                    <div>
                                        <Label className="uppercase text-xs font-bold text-zinc-500/70 dark:text-[#B1B6BD]">
                                            Channel name
                                        </Label>
                                        <Input
                                            className="bg-zinc-300/50 dark:bg-[#1E1F22] border-0 text-black focus-visible:ring-0 dark:text-white focus-visible:ring-offset-0 mt-2"
                                            placeholder="new-channel"
                                            autoFocus
                                            icon={<Hash className="w-4 h-4" />}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <DialogFooter className="px-4 py-4 bg-gray-100 dark:bg-[#2B2D30]">
                            <DialogClose asChild>
                                <span className="flex items-center mr-3 hover:underline cursor-pointer text-sm">
                                    Cancel
                                </span>
                            </DialogClose>
                            <Button variant="primary" size="primary" disabled={form.watch("channelName").length === 0}>
                                Create Channel
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
