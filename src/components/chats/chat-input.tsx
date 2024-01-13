
import { stopReplying } from "@/features/message-reply-slice";
import { cn } from "@/lib/utils/utils";
import { RootState } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as z from "zod";
import { EmojiPicker } from "../emoji-picker";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

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

    const {
        isReplying,
        data: { replyingTo },
    } = useSelector((state: RootState) => state.replyMessage);
    const isLoading = inputForm.formState.isSubmitting;
    const dispatch = useDispatch();

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
                                <div>
                                    {isReplying && (
                                        <div className="px-4">
                                            <div className="flex items-center rounded-t-md bg-zinc-800/70 px-4 py-2.5">
                                                <p className="text-[13px] text-zinc-500 dark:text-zinc-400">
                                                    Replying to{" "}
                                                    <strong>
                                                        {replyingTo}
                                                    </strong>
                                                </p>
                                                <Separator className="ml-auto mr-2 h-[0.1px] w-5 rotate-90 rounded-lg bg-zinc-500 opacity-30" />
                                                <button
                                                    className="flex h-[15px] w-[15px]  items-center justify-center rounded-full bg-zinc-500 transition dark:bg-zinc-400 dark:hover:bg-zinc-300"
                                                    onClick={() =>
                                                        dispatch(stopReplying())
                                                    }
                                                >
                                                    <X
                                                        className="p-0.5"
                                                        stroke="#2B2D30"
                                                        strokeWidth={3}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    )}
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
                                            className={cn(
                                                "border-0 border-none bg-zinc-200/90 px-14 py-6 text-zinc-600 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-700/75 dark:text-zinc-200",
                                                isReplying && "rounded-t-none",
                                            )}
                                            {...field}
                                        />
                                        <div className="absolute right-8 top-3">
                                            <EmojiPicker
                                                onChange={(emoji: string) =>
                                                    field.onChange(
                                                        (field.value += emoji),
                                                    )
                                                }
                                            />
                                        </div>
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
