import EmojiPicker from "@emoji-mart/react";

import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";

interface IMessageContentProps {
    message: any;
    isEditing: boolean;
    form: any;
    timeStamp: string;
    isImage: boolean;
    isOwner: boolean;
    handleSubmit: (values: any) => void;
}
export const MessageContent = ({
    message,
    isEditing,
    form,
    timeStamp,
    isImage,
    isOwner,
    handleSubmit,
}: IMessageContentProps) => {
    return (
        <>
            {isEditing && (
                <Form {...form}>
                    <form
                        className="flex w-full items-center pt-2"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <FormField
                            name="content"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl>
                                        <div className="relative w-full">
                                            <Input
                                                className="border-0 border-none bg-zinc-200/90 px-4 py-5 text-zinc-600 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-700/75 dark:text-zinc-200"
                                                placeholder="Edited message"
                                                autoComplete="off"
                                                {...field}
                                            />
                                            <div className="absolute right-4 top-2">
                                                <EmojiPicker
                                                    onChange={(emoji: string) =>
                                                        field.onChange(
                                                            (field.value +=
                                                                emoji),
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
                    <span className="mt-1 text-[11px] text-zinc-400">
                        escape to <span className="text-sky-500">cancel</span>,
                        enter to <span className="text-sky-500">save</span>
                    </span>
                </Form>
            )}
            {isImage && (
                <a
                    href={message.fileUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative mt-2 flex aspect-square h-48 w-48 cursor-pointer items-center overflow-hidden rounded-md border bg-secondary"
                >
                    <img
                        src={message.fileUrl}
                        alt={message.content}
                        className="object-top"
                    />
                </a>
            )}
            {!isEditing && !isImage && (
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {message.content}
                    {message.isUpdated && (
                        <span className="mx-2 text-[10px] text-zinc-500 dark:text-zinc-400">
                            (edited)
                        </span>
                    )}
                </p>
            )}
        </>
    );
};
