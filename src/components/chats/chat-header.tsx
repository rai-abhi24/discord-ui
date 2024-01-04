import { Hash } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { useParams } from "react-router-dom";

interface IChatHeaderProps {
    channel: any;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
}
export const ChatHeader = ({ channel, imageUrl, name, type }: IChatHeaderProps) => {
    const { serverId } = useParams()

    return (
        <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
            <MobileToggle
                serverId={serverId!}
            />
            {type === "channel" &&
                < Hash className="chat-header-hash-icon" />
            }
            <p className="chat-header-channel-name">{channel[0]?.name}</p>
        </div>
    );
}