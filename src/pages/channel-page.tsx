import { ChatHeader } from "@/components/chats/chat-header";
import { ChatInput } from "@/components/chats/chat-input";
import { ChatMessages } from "@/components/chats/chat-messages";
import { servers } from "@/components/navigations/navigation-sidebar";
import { allChannels } from "@/components/servers/server-sidebar";
import { useParams } from "react-router-dom";

export const ChannelPage = () => {
    const { channelId, serverId } = useParams();

    const channel = allChannels.filter((channel) => channel.id === channelId);
    const server = servers.filter((server) => server.id === serverId);

    return (
        <div className="flex h-full flex-col bg-white dark:bg-[#313338]">
            <ChatHeader
                channel={channel}
                type="channel"
                name={server[0].name}
            />
            <ChatMessages
                channel={channel}
                type="channel"
                // name={server[0].name}
            />
            <ChatInput
                name={channel[0]?.name}
                type="channel"
                apiUrl="api/socket/message"
                query={{
                    channelId: channel[0]?.id,
                    serverId: server[0]?.id,
                }}
            />
        </div>
    );
};
