import { Hash } from "lucide-react";

interface IChatWelcomeProps {
    channel: any;
    type: string;
}

export const ChatWelcome = ({ channel, type }: IChatWelcomeProps) => {
    const name = channel[0]?.name;

    return (
        <div className="mb-4 space-y-2 px-4">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700">
                <Hash className="h-12 w-12" />
            </div>
            <p className="font-custom text-xl font-bold md:text-3xl">
                {type === "channel" ? `Welcome to #` : ""}
                {name}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {type === "channel"
                    ? `This is the start of the #${name} channel.`
                    : `This is the start of conversation with ${name}.`}
            </p>
        </div>
    );
};
