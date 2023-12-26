import * as z from "zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as Constants from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

import { RootState } from "@/store/store";
import { closeModal } from "@/features/modal-slice";

interface IFormValues {
    name: string;
    imageUrl: string;
}

const formInitialValues: IFormValues = {
    name: "",
    imageUrl: "",
};

const formSchema = z.object({
    name: z.string().min(1, Constants.SERVER_NAME_VALIDATION_ERROR),
    imageUrl: z.string().min(1, Constants.SERVER_IMAGE_VALIDATION_ERROR),
});

export const CreateServerModal = () => {
    const { isOpen, type } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const isModalOpen = isOpen && type === Constants.MODAL_TYPE_CREATE_SERVER;

    const handleClose = () => {
        form.reset();
        dispatch(closeModal());
    };

    const form = useForm<IFormValues>({
        defaultValues: formInitialValues,
        resolver: zodResolver(formSchema),
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = (values: z.infer<typeof formSchema>): void => {
        try {
            // axios.post("/api/server", values)
            dispatch(closeModal());
        } catch (error) {
            console.log(values);
        }
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white dark:bg-[#313338] p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold dark:text-white">
                        Create your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500 dark:text-[#B1B6BD]">
                        Give your server a personality with a name and image. You can always change it later.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-8 px-6">
                            <div className="flex justify-center">
                                <FormField
                                    name="imageUrl"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <FileUpload
                                                    endpoint="serverImage"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="name"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-[#B1B6BD]">
                                            Server name
                                        </FormLabel>
                                        <FormControl>
                                            <div>
                                                <Input
                                                    disabled={isLoading}
                                                    className="bg-zinc-300/50 dark:bg-[#1E1F22] border-0 text-black focus-visible:ring-0 dark:text-white focus-visible:ring-offset-0"
                                                    autoFocus
                                                    {...field}
                                                />
                                                <span className="text-zinc-500 dark:text-[#B1B6BD] text-[11px]">
                                                    By creating the server, you agree to our
                                                    <a href="#" className="text-[#3CA8F7]">
                                                        {" "}
                                                        Community Guidelines
                                                    </a>
                                                    .
                                                </span>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="px-6 py-4 bg-gray-100 dark:bg-[#2B2D30]">
                            <Button
                                variant="primary"
                                disabled={form.watch("name").length === 0}
                                type="submit"
                                size="primary"
                            >
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
