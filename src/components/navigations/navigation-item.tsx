import { useNavigate, useParams } from "react-router-dom";
import ActionTooltip from "../action-tooltip";

import { TOOLTIP_ALIGN_CENTER, TOOLTIP_SIDE_RIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils/utils";

export interface INavigationItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

const NavigationItem = ({ id, name, imageUrl }: INavigationItemProps) => {
    const { serverId } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/servers/${id}/channels/1`);
    };

    return (
        <ActionTooltip
            label={name}
            align={TOOLTIP_ALIGN_CENTER}
            side={TOOLTIP_SIDE_RIGHT}
        >
            <button
                key={id}
                onClick={handleClick}
                className="group relative flex items-center"
            >
                <div
                    className={cn(
                        "absolute left-0 w-1 rounded-r-full bg-black transition-all dark:bg-white",
                        serverId !== id && "group-hover:h-5",
                        serverId === id ? "h-9" : "h-2",
                    )}
                />
                <div
                    className={cn(
                        "group relative mx-3 flex h-12 w-12 overflow-hidden rounded-full transition-all group-hover:rounded-[16px]",
                        serverId === id &&
                            "rounded-[16px] bg-primary/10 text-primary",
                    )}
                >
                    <img
                        src={imageUrl}
                        alt={name}
                        className="h-full w-full object-cover object-top"
                    />
                </div>
            </button>
        </ActionTooltip>
    );
};

export default NavigationItem;
