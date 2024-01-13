import { Edit, Reply, Trash2 } from "lucide-react";
import ActionTooltip from "../action-tooltip";

interface IMessageActionsProps {
    isOwner: boolean;
    setIsEditing: (isEditing: boolean) => void;
    handleReplyClick: () => void;
    handleDelete: () => void;
}
export const MessageActions = ({
    isOwner,
    setIsEditing,
    handleReplyClick,
    handleDelete,
}: IMessageActionsProps) => {
    return (
        <div className="absolute -top-2 right-6 hidden items-center gap-x-2 rounded-sm border bg-white px-2 py-1 group-hover:flex dark:bg-zinc-800">
            {isOwner && (
                <ActionTooltip label="Edit" className="mb-1">
                    <Edit
                        onClick={() => setIsEditing(true)}
                        strokeWidth="2"
                        className="h-4 w-4 cursor-pointer text-zinc-500 transition hover:text-zinc-600 dark:hover:text-zinc-300"
                    />
                </ActionTooltip>
            )}
            <ActionTooltip label="Reply" className="mb-1">
                <Reply
                    onClick={handleReplyClick}
                    strokeWidth="2"
                    className="h-5 w-5 cursor-pointer text-zinc-500 transition hover:text-zinc-600 dark:hover:text-zinc-300"
                />
            </ActionTooltip>
            {isOwner && (
                <ActionTooltip label="Delete" className="mb-1">
                    <Trash2
                        onClick={handleDelete}
                        strokeWidth="2"
                        className="h-4 w-4 cursor-pointer text-rose-500/70 transition hover:text-rose-600 dark:hover:text-rose-600"
                    />
                </ActionTooltip>
            )}
        </div>
    );
};
