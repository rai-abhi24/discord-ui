import { useDispatch } from "react-redux"
import { Plus, Settings } from "lucide-react"

import ActionTooltip from "../action-tooltip"
import { ModalTypes, openModal, serverSectionTypes } from "@/features/modal-slice"

export type sectionTypes = "channels" | "members"

interface IServerSectionProps {
    label: string
    role: string
    section: sectionTypes
    sectionType?: serverSectionTypes
    channelType: ModalTypes
}

export const ServerSection = ({ label, role, section, sectionType, channelType }: IServerSectionProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openModal({
            type: channelType,
            data: { sectionType }
        }))
    }

    return (
        <div className="flex items-center justify-between py-2 group">
            <p className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                {label}
            </p>
            {role !== "guest" && section === "channels" && (
                <ActionTooltip
                    label="Create Channel"
                    side="top"
                >
                    <button
                        onClick={handleClick}
                        className="text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </ActionTooltip>
            )}
            {role === "members" && section === "members" && (
                <ActionTooltip
                    label="Manage Members"
                    side="top"
                >
                    <button
                        onClick={handleClick}
                        className="text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition"
                    >
                        <Settings className="w-4 h-4" />
                    </button>
                </ActionTooltip>
            )}
        </div>
    )
}