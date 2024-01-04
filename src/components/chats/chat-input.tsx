import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Plus, Smile } from "lucide-react";

interface IChatInputProps {
    name: string;
    apiUrl: string;
    type: "channel" | "conversation";
    query: Record<string, any>;
}

const inputFormSchema = z.object({
    content: z.string().min(1),
})

export const ChatInput = ({ name, apiUrl, query, type }: IChatInputProps) => {
    const inputForm = useForm<z.infer<typeof inputFormSchema>>({
        resolver: zodResolver(inputFormSchema),
        defaultValues: {
            content: ""
        }
    })

    const isLoading = inputForm.formState.isSubmitting;

    const onSubmit = (values: z.infer<typeof inputFormSchema>) => {
        console.log(values);
    }

    return (
        <Form {...inputForm}>
            <form onSubmit={inputForm.handleSubmit(onSubmit)}>
                <FormField
                    name="content"
                    control={inputForm.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative px-4 pb-6">
                                    <button
                                        className="absolute top-3 left-8 bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 rounded-full w-[24px] h-[24px] transition p-1 flex items-center justify-center"
                                    >
                                        <Plus strokeWidth={3} className="text-white dark:text-[#313338] text-lg" />
                                    </button>
                                    <Input
                                        className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-0 border-none text-zinc-600 dark:text-zinc-200 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-zinc-500"
                                        placeholder={`Message ${type === "channel" ? "#" + name : name}`}
                                        {...field}
                                    />
                                    <div className="absolute top-3 right-8">
                                        <Smile />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}