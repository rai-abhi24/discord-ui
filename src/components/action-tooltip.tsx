import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { TOOLTIP_DELAY } from "@/lib/constants";

interface IActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

const ActionTooltip = ({
    align,
    children,
    label,
    side,
}: IActionTooltipProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={TOOLTIP_DELAY}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent align={align} side={side}>
                    <p className="text-sm font-semibold">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ActionTooltip;
