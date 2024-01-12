import * as z from "zod";

import { reply } from "@/features/message-reply-slice";
import { openModal } from "@/features/modal-slice";
import { MODAL_TYPE_DELETE_MESSAGE } from "@/lib/constants";
import { cn } from "@/lib/utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MessageActions } from "../messages/message-actions";
import { MessageContent } from "../messages/message-content";
import { MessageReference } from "../messages/message-reference";
import { UserAvatar } from "../user-avatar";

interface IChatItemProps {
    message: any;
}

const DATE_FORMAT = "d/MM/yyyy h:mm a";

const roleColors = {
    admin: "text-yellow-500",
    moderator: "text-orange-500",
    default: "text-[#5BC770]",
};

const inputFormSchema = z.object({
    content: z.string().min(1),
});

export const ChatItem = ({ message }: IChatItemProps) => {
    const dispatch = useDispatch();
    const isImage = message.fileUrl;
    const isOwner = message?.sender?.role === "admin";
    const timeStamp = format(new Date(message?.createdAt), DATE_FORMAT);
    const hasReferenceMessage =
        Object.keys(message.message_reference).length !== 0;

    const [isEditing, setIsEditing] = useState(false);

    const form = useForm<z.infer<typeof inputFormSchema>>({
        defaultValues: {
            content: "",
        },
        resolver: zodResolver(inputFormSchema),
    });

    useEffect(() => {
        form.reset({
            content: message.content,
        });
    }, [message.content]);

    useEffect(() => {
        const handleEscapeKeyPress = (e: any) => {
            if (e.key === "Escape" || e.keyCode === 27) {
                setIsEditing(false);
            }
        };
        window.addEventListener("keydown", handleEscapeKeyPress);

        return () =>
            window.removeEventListener("keydown", handleEscapeKeyPress);
    }, []);

    const roleStyle =
        roleColors[message.sender.role as keyof typeof roleColors] ||
        roleColors.default;

    const handleSubmit = (values: z.infer<typeof inputFormSchema>) => {
        message.isUpdated = true;
        message.content = values.content;
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch(
            openModal({
                type: MODAL_TYPE_DELETE_MESSAGE,
                data: {
                    message: { ...message, createdAt: timeStamp },
                },
            }),
        );
    };

    const handleReplyClick = () => {
        dispatch(
            reply({
                data: {
                    replyingTo: message.sender.name,
                },
            }),
        );
    };

    return (
        <div className="group relative flex w-full items-center p-4 transition hover:bg-black/5">
            <div className="group flex w-full items-start gap-x-2">
                <div className="flex w-full flex-col gap-y-1">
                    {hasReferenceMessage && (
                        <MessageReference message={message} />
                    )}
                    <div className="flex gap-x-2">
                        <div className="cursor-pointer transition hover:drop-shadow-md">
                            <UserAvatar src={message.sender.avatar} />
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="flex items-center gap-x-2">
                                <div className="flex items-center">
                                    <p
                                        className={cn(
                                            "cursor-pointer text-sm font-bold hover:underline",
                                            roleStyle,
                                        )}
                                    >
                                        {message.sender.name}
                                    </p>
                                </div>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                    {timeStamp}
                                </span>
                            </div>
                            <MessageContent
                                message={message}
                                isEditing={isEditing}
                                form={form}
                                timeStamp={timeStamp}
                                isImage={isImage}
                                isOwner={isOwner}
                                handleSubmit={handleSubmit}
                            />
                            <MessageActions
                                isOwner={isOwner}
                                setIsEditing={setIsEditing}
                                handleReplyClick={handleReplyClick}
                                handleDelete={handleDelete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
