import { useNavigate, useParams } from "react-router-dom";
import ActionTooltip from "../action-tooltip";

import { cn } from "@/lib/utils/utils";
import { TOOLTIP_ALIGN_CENTER, TOOLTIP_SIDE_RIGHT } from "@/lib/constants";
import { useEffect, useState } from "react";

export interface NavigationItemProps {
    id: number;
    name: string;
    imageUrl: string;
}

const NavigationItem = ({ id, name, imageUrl }: NavigationItemProps) => {
    // const {serverId}  = useParams();
    const [serverId, setServerId] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        setServerId(id);
        navigate(`/servers/${id}`);
    };

    return (
        <ActionTooltip label={name} align={TOOLTIP_ALIGN_CENTER} side={TOOLTIP_SIDE_RIGHT}>
            <button key={id} onClick={handleClick} className="group relative flex items-center">
                <div
                    className={cn(
                        "absolute left-0 w-1 transition-all rounded-r-full bg-black dark:bg-white",
                        serverId !== id && "group-hover:h-5",
                        serverId === id ? "h-9" : "h-2"
                    )}
                />
                <div
                    className={cn(
                        "relative w-12 h-12 rounded-full group group-hover:rounded-[16px] transition-all overflow-hidden mx-3 flex",
                        serverId === id && "bg-primary/10 text-primary rounded-[16px]"
                    )}
                >
                    <img src={imageUrl} alt={name} className="object-cover w-full h-full object-top" />
                </div>
            </button>
        </ActionTooltip>
    );
};

export default NavigationItem;
