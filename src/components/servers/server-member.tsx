import { cn } from "@/lib/utils/utils"
import { ShieldAlert, ShieldCheck } from "lucide-react"
import { UserAvatar } from "../user-avatar"

interface IServerMemberProps {
    member: any,
    server?: any
}
export type MemberRoles =
    | "guest"
    | "moderator"
    | "admin"

const roleIconMap: Record<MemberRoles, JSX.Element | null> = {
    guest: null,
    moderator: <ShieldCheck className="w-4 h-4 ml-2 text-indigo-500" />,
    admin: <ShieldAlert className="w-4 h-4 ml-2 text-rose-500" />,
}

export const ServerMember = ({ member, server }: ServerMemberProps) => {
    const { role, profile, id } = member;
    const icon = roleIconMap[role as MemberRoles];
    const urlId = "101";

    return (
        <button
            className={cn(
                "w-full rounded-md px-2 py-2 mb-1 flex items-center gap-x-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition",
                id === urlId && "bg-zinc-700/20 dark:bg-zinc-700"
            )}
        >
            {icon}
            <UserAvatar src={profile?.imageUrl} />
            <p className="text-sm font-semibold text-[#5BC770] transition">{profile?.name}</p>
        </button>
    );
};
