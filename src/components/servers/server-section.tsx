import { Plus, Settings } from "lucide-react";
import { useDispatch } from "react-redux";

import {
    ModalTypes,
    openModal,
    serverSectionTypes,
} from "@/features/modal-slice";
import ActionTooltip from "../action-tooltip";

export type sectionTypes = "channels" | "members";

interface IServerSectionProps {
    label: string;
    role: string;
    section: sectionTypes;
    sectionType?: serverSectionTypes;
    channelType: ModalTypes;
}

export const ServerSection = ({
    label,
    role,
    section,
    sectionType,
    channelType,
}: IServerSectionProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            openModal({
                type: channelType,
                data: { sectionType },
            }),
        );
    };

    return (
        <div className="group flex items-center justify-between py-2">
            <p className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                {label}
            </p>
            {role !== "guest" && section === "channels" && (
                <ActionTooltip label="Create Channel" side="top">
                    <button
                        onClick={handleClick}
                        className="text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </ActionTooltip>
            )}
            {role === "members" && section === "members" && (
                <ActionTooltip label="Manage Members" side="top">
                    <button
                        onClick={handleClick}
                        className="text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
                    >
                        <Settings className="h-4 w-4" />
                    </button>
                </ActionTooltip>
            )}
        </div>
    );
};
