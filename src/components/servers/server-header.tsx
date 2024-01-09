import {
    ChevronDown,
    LogOut,
    PlusCircle,
    Settings,
    Trash,
    UserPlus,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { openModal } from "@/features/modal-slice";
import * as Constants from "@/lib/constants";
import { useDispatch } from "react-redux";

interface IServerHeaderProps {
    server: any;
    role: string;
}

const ServerHeader = ({ server, role }: IServerHeaderProps) => {
    const dispatch = useDispatch();
    const isAdmin = role === "admin";
    const isModerator = isAdmin || role === "moderator";

    const handleInvitePeopleClick = () => {
        dispatch(openModal({ type: Constants.MODAL_TYPE_INVITE }));
    };

    const handleDeleteServerClick = () => {
        dispatch(openModal({ type: Constants.MODAL_TYPE_DELETE_SERVER }));
    };

    const handleLeaveServerClick = () => {
        dispatch(openModal({ type: Constants.MODAL_TYPE_LEAVE_SERVER }));
    };

    // const handleLogOutClick = () => {
    //     dispatch(openModal({ type: Constants.MODAL_TYPE_LOGOUT }))
    // }

    const handleServerSettingsClick = () => {
        dispatch(openModal({ type: Constants.MODAL_TYPE_SERVER_SETTINGS }));
    };

    const handleCreateChannelClick = () => {
        dispatch(openModal({ type: Constants.MODAL_TYPE_CREATE_CHANNEL }));
    };

    // const handleCreateCategoryClick = () => {
    //     dispatch(openModal({ type: Constants.MODAL_TYPE_CREATE_CATEGORY }))
    // }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus:outline-none">
                <button className="text-md flex h-12 w-full items-center border-b-2 border-neutral-200 px-4 font-semibold transition hover:bg-zinc-700/10 dark:border-neutral-800 dark:hover:bg-zinc-700/50">
                    {server[0].name}
                    <ChevronDown className="ml-auto h-5 w-5" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 space-y-[2px] text-xs font-medium text-black dark:text-neutral-400">
                {isModerator && (
                    <DropdownMenuItem
                        className="cursor-pointer px-3 py-2 text-sm text-indigo-600 dark:text-indigo-400"
                        onClick={handleInvitePeopleClick}
                    >
                        Invite People
                        <UserPlus className="ml-auto h-4 w-4" />
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem
                        className="cursor-pointer px-3 py-2 text-sm"
                        onClick={handleServerSettingsClick}
                    >
                        Server Settings
                        <Settings className="ml-auto h-4 w-4" />
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem
                        className="cursor-pointer px-3 py-2 text-sm"
                        onClick={handleCreateChannelClick}
                    >
                        Create Channel
                        <PlusCircle className="ml-auto h-4 w-4" />
                    </DropdownMenuItem>
                )}
                {isModerator && <DropdownMenuSeparator />}
                {isAdmin && (
                    <DropdownMenuItem
                        className="cursor-pointer px-3 py-2 text-sm text-rose-500"
                        onClick={handleDeleteServerClick}
                    >
                        Delete Server
                        <Trash className="ml-auto h-4 w-4" />
                    </DropdownMenuItem>
                )}
                {!isAdmin && (
                    <DropdownMenuItem
                        className="cursor-pointer px-3 py-2 text-sm text-rose-500"
                        onClick={handleLeaveServerClick}
                    >
                        Leave Server
                        <LogOut className="ml-auto h-4 w-4" />
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ServerHeader;
