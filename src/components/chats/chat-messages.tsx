import { Loader2, ServerCrash } from "lucide-react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { servers } from "../navigations/navigation-sidebar";
import { Separator } from "../ui/separator";
import { ChatItem } from "./chat-item";
import { ChatWelcome } from "./chat-welcome";

interface IChatMessagesProps {
    channel: any;
    type: string;
}

export const ChatMessages = ({ channel, type }: IChatMessagesProps) => {
    let status = "";
    const { serverId } = useParams();
    const messages = [
        {
            id: "1",
            content: "Hello, how are you?",
            sender: {
                id: servers[0].id,
                name: servers[0].name,
                avatar: servers[0].imageUrl,
                role:
                    serverId === servers[0].id
                        ? "admin"
                        : serverId === servers[1].id
                          ? "moderator"
                          : "guest",
            },
            message_reference: {},
            referenced_message: {},
            deleted: false,
            fileUrl: null,
            isUpdated: false,
            createdAt: "2024-01-09 15:30:45",
        },
        {
            id: "2",
            content: "I'm doing well, thanks for asking!",
            sender: {
                id: servers[3].id,
                name: servers[3].name,
                avatar: servers[3].imageUrl,
                role: serverId === servers[3].id ? "admin" : "guest",
            },
            message_reference: {},
            referenced_message: {},
            deleted: false,
            fileUrl: null,
            isUpdated: true,
            createdAt: "2024-01-09 15:31:00",
        },
        {
            id: "3",
            content: "",
            sender: {
                id: servers[0].id,
                name: servers[0].name,
                avatar: servers[0].imageUrl,
                role:
                    serverId === servers[0].id
                        ? "admin"
                        : serverId === servers[1].id
                          ? "moderator"
                          : "guest",
            },
            message_reference: {},
            referenced_message: {},
            deleted: false,
            fileUrl: servers[2].imageUrl,
            isUpdated: false,
            createdAt: "2024-01-09 15:32:00",
        },
        {
            id: "4",
            content: "Loved it ❤️",
            sender: {
                id: servers[3].id,
                name: servers[3].name,
                avatar: servers[3].imageUrl,
                role: serverId === servers[3].id ? "admin" : "guest",
            },
            message_reference: {},
            referenced_message: {},
            deleted: false,
            fileUrl: null,
            isUpdated: false,
            createdAt: "2024-01-09 15:33:00",
        },
        {
            id: "6",
            content: "Woww ❤️",
            sender: {
                id: servers[1].id,
                name: servers[1].name,
                avatar: servers[1].imageUrl,
                role:
                    serverId === servers[1].id
                        ? "admin"
                        : serverId === servers[0].id
                          ? "moderator"
                          : "guest",
            },
            message_reference: {},
            referenced_message: {},
            deleted: false,
            fileUrl: null,
            isUpdated: false,
            createdAt: "2024-01-09 15:33:00",
        },
        {
            id: "5",
            content: "Thanks😄",
            sender: {
                id: servers[0].id,
                name: servers[0].name,
                avatar: servers[0].imageUrl,
                role:
                    serverId === servers[0].id
                        ? "admin"
                        : serverId === servers[1].id
                          ? "moderator"
                          : "guest",
            },
            message_reference: {},
            referenced_message: {},
            deleted: false,
            fileUrl: null,
            isUpdated: false,
            createdAt: "2024-01-09 15:34:00",
        },
        {
            id: "1195386479732609167",
            type: 19,
            content: "js",
            channel_id: "1189267573578149908",
            sender: {
                id: "850617032461778966",
                name: "abhi1924",
                avatar: servers[0].imageUrl,
                discriminator: "0",
                public_flags: 0,
                premium_type: 0,
                flags: 0,
                banner: null,
                accent_color: null,
                global_name: null,
                avatar_decoration_data: null,
                banner_color: null,
            },
            attachments: [],
            embeds: [],
            mentions: [],
            mention_roles: [],
            pinned: false,
            mention_everyone: false,
            tts: false,
            createdAt: "2024-01-12T15:19:05.975000+00:00",
            edited_timestamp: null,
            flags: 0,
            components: [],
            message_reference: {
                channel_id: "1189267573578149908",
                message_id: "1195351042246856765",
                guild_id: "1188364853207904337",
            },
            referenced_message: {
                id: "1195351042246856765",
                type: 0,
                content: "hey",
                channel_id: "1189267573578149908",
                author: {
                    id: "1195350014562676826",
                    name: "anjalirai_",
                    avatar: servers[2].imageUrl,
                    discriminator: "0",
                    public_flags: 0,
                    premium_type: 0,
                    flags: 0,
                    banner: null,
                    accent_color: null,
                    global_name: "Anjali Rai",
                    avatar_decoration_data: null,
                    banner_color: null,
                },
                attachments: [],
                embeds: [],
                mentions: [
                    {
                        id: "1195350014562676826",
                        username: "anjalirai_",
                        avatar: null,
                        discriminator: "0",
                        public_flags: 0,
                        premium_type: 0,
                        flags: 0,
                        banner: null,
                        accent_color: null,
                        global_name: "Anjali Rai",
                        avatar_decoration_data: null,
                        banner_color: null,
                    },
                ],
                mention_roles: [],
                pinned: false,
                mention_everyone: false,
                tts: false,
                createdAt: "2024-01-12 12:58:17",
                edited_timestamp: null,
                flags: 0,
                components: [],
            },
        },
    ];

    if (status === "loading") {
        return (
            <div className="flex h-full flex-col items-center justify-center">
                <Loader2
                    size="40"
                    className="my-4 animate-spin text-zinc-500"
                />
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Loading messages...
                </p>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex h-full flex-col items-center justify-center">
                <ServerCrash size="40" className="my-4 text-zinc-500" />
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Something went wrong. Please try again later.
                </p>
            </div>
        );
    }
    return (
        <div className="flex flex-1 flex-col overflow-y-auto py-4">
            <div className="flex-1" />
            <ChatWelcome channel={channel} type={type} />
            <div className="px-4">
                <Separator className="my-4 h-[0.5px] rounded-md bg-zinc-400 dark:bg-zinc-600/80" />
            </div>
            <div>
                {messages.map((message, idx) => (
                    <Fragment key={idx}>
                        <ChatItem message={message} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
