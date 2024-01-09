import { Hash } from "lucide-react";
import { useParams } from "react-router-dom";
import { MobileToggle } from "../mobile-toggle";

interface IChatHeaderProps {
    channel: any;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
}
export const ChatHeader = ({
    channel,
    imageUrl,
    name,
    type,
}: IChatHeaderProps) => {
    const { serverId } = useParams();

    return (
        <div className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
            <MobileToggle serverId={serverId!} />
            {type === "channel" && <Hash className="chat-header-hash-icon" />}
            <p className="chat-header-channel-name">{channel[0]?.name}</p>
        </div>
    );
};
