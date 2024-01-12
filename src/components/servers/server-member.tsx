import { removeEmojis } from "@/lib/helpers/helpers";
import { cn } from "@/lib/utils/utils";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ActionTooltip from "../action-tooltip";
import { UserAvatar } from "../user-avatar";

interface IServerMemberProps {
    member: any;
    server?: any;
}
export type MemberRoles = "guest" | "moderator" | "admin";

const roleIconMap: Record<MemberRoles, JSX.Element | null> = {
    guest: null,
    moderator: <ShieldCheck className="ml-2 h-4 w-4 text-indigo-500" />,
    admin: <ShieldAlert className="ml-2 h-4 w-4 text-rose-500" />,
};

export const ServerMember = ({ member, server }: IServerMemberProps) => {
    const navigate = useNavigate();
    const { role, profile, id } = member;
    const icon = roleIconMap[role as MemberRoles];
    const userName = removeEmojis(profile?.name as string);
    const urlId = "1";

    const handleClick = () => {
        navigate(`/servers/${server[0].id}/members/${member.id}`);
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                "mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-2 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50",
                id === urlId && "bg-zinc-700/20 dark:bg-zinc-700",
            )}
        >
            <UserAvatar src={profile?.imageUrl} />
            <div className="flex w-full items-center justify-between">
                <p
                    className={cn(
                        "line-clamp-1 text-sm font-semibold transition",
                        role === "admin"
                            ? "text-yellow-400"
                            : role === "moderator"
                              ? "text-orange-500"
                              : "text-[#5BC770]",
                    )}
                >
                    {userName}
                </p>
                <ActionTooltip label={role}>{icon}</ActionTooltip>
            </div>
        </button>
    );
};
