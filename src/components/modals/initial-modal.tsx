import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as Constants from "@/lib/constants";

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

const onSubmit = (values: z.infer<typeof formSchema>): void => {
    try {
        // axios.post("/api/server", values)
    } catch (error) {
        console.log(values);
    }
};

const InitialModal = () => {
    const form = useForm<IFormValues>({
        defaultValues: formInitialValues,
        resolver: zodResolver(formSchema),
    });

    const isLoading = form.formState.isSubmitting;

    return (
        <Dialog open>
            <DialogContent className="overflow-hidden bg-white p-0 text-black dark:bg-[#313338]">
                <DialogHeader className="px-6 pt-8">
                    <DialogTitle className="text-center text-2xl font-bold dark:text-white">
                        Create your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500 dark:text-[#B1B6BD]">
                        Give your server a personality with a name and image.
                        You can always change it later.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
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
                                        <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-[#B1B6BD] dark:text-secondary/70">
                                            Server name
                                        </FormLabel>
                                        <FormControl>
                                            <div>
                                                <Input
                                                    disabled={isLoading}
                                                    className="border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-[#1E1F22] dark:text-white"
                                                    autoFocus
                                                    {...field}
                                                />
                                                <span className="text-[11px] text-zinc-500 dark:text-[#B1B6BD]">
                                                    By creating the server, you
                                                    agree to our
                                                    <a
                                                        href="#"
                                                        className="text-[#3CA8F7]"
                                                    >
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
                        <DialogFooter className="bg-gray-100 px-6 py-4 dark:bg-[#2B2D30]">
                            <Button
                                variant="primary"
                                disabled={isLoading}
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

export default InitialModal;
