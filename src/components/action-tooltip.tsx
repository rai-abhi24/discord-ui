import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { TOOLTIP_DELAY } from "@/lib/constants";

interface ActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

const ActionTooltip = ({ align, children, label, side }: ActionTooltipProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={TOOLTIP_DELAY}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent align={align} side={side}>
                    <p className="font-semibold text-sm">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ActionTooltip;
