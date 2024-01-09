import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as z from "zod";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormField } from "@/components/ui/form";
import * as Constants from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { closeModal } from "@/features/modal-slice";
import { RootState } from "@/store/store";
import { Hash } from "lucide-react";
import {
    CustomChannelTypeField,
    CustomRadioFieldType,
} from "../custom/custom-radio-field";
import { Label } from "../ui/label";

interface IFormValues {
    channelName: string;
    channelType: CustomRadioFieldType;
}

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

    const formInitialValues: IFormValues = {
        channelName: "",
        channelType: "text",
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
            <DialogContent className="overflow-hidden bg-white p-0 dark:bg-[#313338]">
                <DialogHeader className="px-4 pt-4">
                    <DialogTitle className="text-xl font-normal">
                        Create Channel
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="mb-[20px] flex w-full flex-col px-4">
                            <FormField
                                name="channelType"
                                render={({ field }) => (
                                    <div>
                                        <Label className="text-xs font-bold uppercase text-zinc-500/70 dark:text-[#B1B6BD]">
                                            Channel type
                                        </Label>
                                        <div className="mb-4 mt-1 flex flex-col space-y-1">
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
                                        <Label className="text-xs font-bold uppercase text-zinc-500/70 dark:text-[#B1B6BD]">
                                            Channel name
                                        </Label>
                                        <Input
                                            className="mt-2 border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-[#1E1F22] dark:text-white"
                                            placeholder="new-channel"
                                            autoFocus
                                            icon={<Hash className="h-4 w-4" />}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 px-4 py-4 dark:bg-[#2B2D30]">
                            <DialogClose asChild>
                                <span className="mr-3 flex cursor-pointer items-center text-sm hover:underline">
                                    Cancel
                                </span>
                            </DialogClose>
                            <Button
                                variant="primary"
                                size="primary"
                                disabled={
                                    form.watch("channelName").length === 0
                                }
                            >
                                Create Channel
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
