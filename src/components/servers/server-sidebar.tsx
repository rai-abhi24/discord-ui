import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";
import { servers } from "../navigations/navigation-sidebar";
import { ScrollArea } from "../ui/scroll-area";
import ServerHeader from "./server-header";
import { ServerSearchBar } from "./server-searchbar";
import { Separator } from "../ui/separator";
import { ServerSection } from "./server-section";
import { MODAL_TYPE_CREATE_CHANNEL } from "@/lib/constants";
import { ServerChannel } from "./server-channel";
import { ServerMember } from "./server-member";

interface IServerSidebarProps {
    serverId?: string;
}


const textChannelData = [
    { id: "1", name: "general", type: "text" },
    { id: "2", name: "Voice 1", type: "text" },
];

const voiceChannelData = [
    { id: "21", name: "Voice Channel 1", type: "voice" },
    { id: "22", name: "Voice Channel 2", type: "voice" },
    { id: "23", name: "Voice Channel 3", type: "voice" },
];

export const allChannels = [...textChannelData, ...voiceChannelData]

const memberData = [
    {
        id: "101",
        profile: {
            name: servers[0].name,
            imageUrl: servers[0].imageUrl,
        },
        role: "admin"
    },
    {
        id: "102",
        profile: {
            name: servers[3].name,
            imageUrl: servers[3].imageUrl,
        },
        role: "moderator"
    },
];

const iconMap = {
    "text": <Hash className="mr-2 h-4 w-4" />,
    "audio": <Mic className="mr-2 h-4 w-4" />,
    "video": <Video className="mr-2 h-4 w-4" />
};

const roleIconMap = {
    ["guest"]: null,
    ["moderator"]: <ShieldCheck className="h-4 w-4 mr-2 text-indigo-500" />,
    ["admin"]: <ShieldAlert className="h-4 w-4 mr-2 text-rose-500" />
}

const data = [
    {
        label: "Text Channels",
        type: "channel",
        data: textChannelData?.map((channel) => ({
            id: channel.id,
            name: channel.name,
            icon: iconMap["text"],
        })),
    },
    {
        label: "Voice Channels",
        type: "channel",
        data: voiceChannelData?.map((channel) => ({
            id: channel.id,
            name: channel.name,
            icon: iconMap["audio"],
        })),
    },
    {
        label: "Video Channels",
        type: "channel",
        data: textChannelData?.map((channel) => ({
            id: channel.id,
            name: channel.name,
            icon: iconMap["video"],
        })),
    },
    {
        label: "Members",
        type: "member",
        data: memberData?.map((member) => ({
            id: member.id,
            name: member.profile.name,
            icon: roleIconMap["admin"],
        })),
    },
];

export const ServerSidebar = ({ serverId }: IServerSidebarProps) => {
    return (
        <div className="bg-[#F2F3F5] dark:bg-[#2B2D31] h-full flex flex-col">
            <ServerHeader server={servers} role="admin" />
            <ScrollArea className="flex-1 px-3">
                <ServerSearchBar
                    data={data}
                />
                <Separator className="my-1 mx-auto rounded-md bg-zinc-200 dark:bg-zinc-700" />
                {textChannelData.length && (
                    <div className="mb-3">
                        <ServerSection
                            label="Text Channels"
                            role="admin"
                            section="channels"
                            sectionType="text"
                            channelType={MODAL_TYPE_CREATE_CHANNEL}
                        />
                        <div className="space-y-[2px]">
                            {textChannelData.map((channel) => (
                                <ServerChannel
                                    key={channel.id}
                                    channel={channel}
                                    role="admin"
                                    serverData={servers}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {voiceChannelData.length && (
                    <div className="mb-3">
                        <ServerSection
                            label="Voice Channels"
                            role="admin"
                            section="channels"
                            sectionType="voice"
                            channelType={MODAL_TYPE_CREATE_CHANNEL}
                        />
                        <div className="space-y-[2px]">
                            {voiceChannelData.map((channel) => (
                                <ServerChannel
                                    key={channel.id}
                                    channel={channel}
                                    role="admin"
                                    serverData={servers}
                                />
                            ))}
                        </div>
                    </div>
                )}
                <ServerSection
                    label="Manage Members"
                    role="members"
                    section="members"
                    channelType={MODAL_TYPE_CREATE_CHANNEL}
                />
                <div className="space-y-[2px]">
                    {memberData.map((member) => (
                        <ServerMember
                            key={member.id}
                            member={member}
                            server={servers}
                        />
                    ))}
                </div>
            </ScrollArea >
        </div >
    );
};
