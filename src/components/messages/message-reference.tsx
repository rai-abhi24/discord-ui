import { UserAvatar } from "../user-avatar";

export const MessageReference = ({ message }: { message: any }) => {
    return (
        <div className="relative ml-[18px] flex items-center gap-x-3">
            <div className="h-[14px] w-8 rounded-tl-md border-2 border-zinc-600 border-b-transparent border-r-transparent"></div>
            <div className="absolute -top-1/2 left-9 flex items-center gap-x-1">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border">
                    <UserAvatar
                        src={message?.referenced_message?.author?.avatar}
                        className="md:h-5 md:w-5"
                    />
                </div>
                <div className="text-sm">
                    {message?.referenced_message?.author?.name}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {message?.referenced_message?.content}
                </div>
            </div>
        </div>
    );
};
