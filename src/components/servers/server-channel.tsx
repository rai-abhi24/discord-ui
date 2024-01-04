import { ChannelType, MODAL_TYPE_DELETE_CHANNEL, MODAL_TYPE_INVITE } from "@/lib/constants";
import { cn } from "@/lib/utils/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Edit, Hash, Lock, Mic, Trash, UserPlus, UserPlus2, Video } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useDispatch } from "react-redux";
import { ModalTypes, openModal } from "@/features/modal-slice";
import { useNavigate, useParams } from "react-router-dom";
import { servers } from "../navigations/navigation-sidebar";

interface IServerChannelProps {
    channel: any;
    role: string,
    serverData: any
}
export const ServerChannel = ({ channel, role, serverData }: IServerChannelProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onAction = (e: any, modalType: ModalTypes) => {
        dispatch(openModal({
            type: modalType,
            data: { channel: channel }
        }))
    }

    const iconMap = {
        [ChannelType.TEXT]: Hash,
        [ChannelType.AUDIO]: Mic,
        [ChannelType.VIDEO]: Video,
    }

    const Icon = iconMap[channel.type]

    const onClick = () => {
        navigate(`/servers/${servers[0].id}/channels/${channel.id}`)
    }

    const { channelId } = useParams()

    return (
        <button
            onClick={onClick}
            className={cn(
                "group px-2 py-1.5 rounded flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
                channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
            )}
        >
            <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            <p
                className={cn(
                    "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-200 dark:group-hover:text-zinc-300 transition",
                    channelId === channel.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
                )}
            >
                {channel.name}
            </p>
            {channel.name !== "general" && role !== "guest" && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTooltip label="Create Invite">
                        <UserPlus2
                            onClick={(e) => onAction(e, MODAL_TYPE_INVITE)}
                            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        />
                    </ActionTooltip>
                    <ActionTooltip label="Delete">
                        <Trash
                            onClick={(e) => onAction(e, MODAL_TYPE_DELETE_CHANNEL)}
                            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        />
                    </ActionTooltip>
                </div>
            )}
            {channel.name === "general" && (
                <div className="ml-auto flex items-center gap-x-2">
                    <ActionTooltip label="Create Invite">
                        <UserPlus2
                            onClick={(e) => onAction(e, MODAL_TYPE_INVITE)}
                            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                        />
                    </ActionTooltip>
                    <Lock
                        className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400"
                    />
                </div>
            )}
        </button>
    );
}