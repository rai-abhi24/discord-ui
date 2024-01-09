import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { EmojiPicker } from "../emoji-picker";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";

interface IChatInputProps {
    name: string;
    apiUrl: string;
    type: "channel" | "conversation";
    query: Record<string, any>;
}

const inputFormSchema = z.object({
    content: z.string().min(1),
});

export const ChatInput = ({ name, apiUrl, query, type }: IChatInputProps) => {
    const inputForm = useForm<z.infer<typeof inputFormSchema>>({
        resolver: zodResolver(inputFormSchema),
        defaultValues: {
            content: "",
        },
    });

    const isLoading = inputForm.formState.isSubmitting;

    const onSubmit = (values: z.infer<typeof inputFormSchema>) => {
        console.log(values);
    };

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
                                    <button className="absolute left-8 top-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-zinc-500 p-1 transition hover:bg-zinc-600 dark:bg-zinc-400 dark:hover:bg-zinc-300">
                                        <Plus
                                            strokeWidth={3}
                                            className="text-lg text-white dark:text-[#313338]"
                                        />
                                    </button>
                                    <Input
                                        autoComplete="off"
                                        disabled={isLoading}
                                        placeholder={`Message ${
                                            type === "channel"
                                                ? "#" + name
                                                : name
                                        }`}
                                        className="border-0 border-none bg-zinc-200/90 px-14 py-6 text-zinc-600 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-700/75 dark:text-zinc-200"
                                        {...field}
                                    />
                                    <div className="absolute right-8 top-3">
                                        <EmojiPicker
                                            onChange={(emoji: string) =>
                                                field.onChange(
                                                    `${field.value}${emoji}`,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};
