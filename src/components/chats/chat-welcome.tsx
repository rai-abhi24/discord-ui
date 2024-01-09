import { Hash } from "lucide-react";

export const ChatWelcome = () => {
    return (
        <div className="mb-4 space-y-2 px-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-500 dark:bg-zinc-700">
                <Hash className="h-10 w-10" />
            </div>
            <p className="font-custom text-xl font-bold text-white md:text-3xl">
                Welcome to
            </p>
        </div>
    );
};
