import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import * as Constants from "@/lib/constants";
import { openModal } from "@/features/modal-slice";
import { useDispatch } from "react-redux";

interface IServerHeaderProps {
    server: any;
    role: string;
}

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
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
                <button className="w-full h-12 px-4 flex items-center border-b-2 border-neutral-200 dark:border-neutral-800 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition text-md font-semibold">
                    {server[0].name}
                    <ChevronDown className="h-5 w-5 ml-auto" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
                {isModerator && (
                    <DropdownMenuItem
                        className="text-indigo-600 dark:text-indigo-400 text-sm cursor-pointer px-3 py-2"
                        onClick={handleInvitePeopleClick}
                    >
                        Invite People
                        <UserPlus className="h-4 w-4 ml-auto" />
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem className="text-sm cursor-pointer px-3 py-2" onClick={handleServerSettingsClick}>
                        Server Settings
                        <Settings className="h-4 w-4 ml-auto" />
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem className="text-sm cursor-pointer px-3 py-2" onClick={handleCreateChannelClick}>
                        Create Channel
                        <PlusCircle className="h-4 w-4 ml-auto" />
                    </DropdownMenuItem>
                )}
                {isModerator && <DropdownMenuSeparator />}
                {isAdmin && (
                    <DropdownMenuItem
                        className="text-rose-500 text-sm cursor-pointer px-3 py-2"
                        onClick={handleDeleteServerClick}
                    >
                        Delete Server
                        <Trash className="h-4 w-4 ml-auto" />
                    </DropdownMenuItem>
                )}
                {!isAdmin && (
                    <DropdownMenuItem
                        className="text-rose-500 text-sm cursor-pointer px-3 py-2"
                        onClick={handleLeaveServerClick}
                    >
                        Leave Server
                        <LogOut className="h-4 w-4 ml-auto" />
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ServerHeader;
