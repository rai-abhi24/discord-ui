import { ModalTypes, openModal } from "@/features/modal-slice";
import {
    ChannelType,
    MODAL_TYPE_DELETE_CHANNEL,
    MODAL_TYPE_INVITE,
} from "@/lib/constants";
import { cn } from "@/lib/utils/utils";
import { Hash, Lock, Mic, Trash, UserPlus2, Video } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ActionTooltip from "../action-tooltip";
import { servers } from "../navigations/navigation-sidebar";

interface IServerChannelProps {
    channel: any;
    role: string;
    serverData: any;
}
export const ServerChannel = ({
    channel,
    role,
    serverData,
}: IServerChannelProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onAction = (e: any, modalType: ModalTypes) => {
        dispatch(
            openModal({
                type: modalType,
                data: { channel: channel },
            }),
        );
    };

    const iconMap = {
        [ChannelType.TEXT]: Hash,
        [ChannelType.AUDIO]: Mic,
        [ChannelType.VIDEO]: Video,
    };

    const Icon = iconMap[channel.type];

    const handleClick = () => {
        navigate(`/servers/${servers[0].id}/channels/${channel.id}`);
    };

    const { channelId } = useParams();

    return (
        <button
            onClick={handleClick}
            className={cn(
                "group mb-1 flex w-full items-center gap-x-2 rounded px-2 py-1.5 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50",
                channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700",
            )}
        >
            <Icon className="h-5 w-5 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
            <p
                className={cn(
                    "line-clamp-1 text-sm font-semibold text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-200 dark:group-hover:text-zinc-300",
                    channelId === channel.id &&
                        "text-primary dark:text-zinc-200 dark:group-hover:text-white",
                )}
            >
                {channel.name}
            </p>
            {channel.name !== "general" && role !== "guest" && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTooltip label="Create Invite">
                        <UserPlus2
                            onClick={(e) => onAction(e, MODAL_TYPE_INVITE)}
                            className="hidden h-4 w-4 text-zinc-500 transition hover:text-zinc-600 group-hover:block dark:text-zinc-400 dark:hover:text-zinc-300"
                        />
                    </ActionTooltip>
                    <ActionTooltip label="Delete">
                        <Trash
                            onClick={(e) =>
                                onAction(e, MODAL_TYPE_DELETE_CHANNEL)
                            }
                            className="hidden h-4 w-4 text-zinc-500 transition hover:text-zinc-600 group-hover:block dark:text-zinc-400 dark:hover:text-zinc-300"
                        />
                    </ActionTooltip>
                </div>
            )}
            {channel.name === "general" && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTooltip label="Create Invite">
                        <UserPlus2
                            onClick={(e) => onAction(e, MODAL_TYPE_INVITE)}
                            className="hidden h-4 w-4 text-zinc-500 transition hover:text-zinc-600 group-hover:block dark:text-zinc-400 dark:hover:text-zinc-300"
                        />
                    </ActionTooltip>
                    <Lock className="ml-auto h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                </div>
            )}
        </button>
    );
};
