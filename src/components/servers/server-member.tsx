import { cn } from "@/lib/utils/utils"
import { ShieldAlert, ShieldCheck } from "lucide-react"
import { UserAvatar } from "../user-avatar"
import { removeEmojis } from "@/lib/helpers/helpers"
import { useNavigate } from "react-router-dom"

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

export const ServerMember = ({ member, server }: IServerMemberProps) => {
    const navigate = useNavigate()
    const { role, profile, id } = member;
    const icon = roleIconMap[role as MemberRoles];
    const userName = removeEmojis(profile?.name as string)
    const urlId = "1";

    const handleClick = () => {
        navigate(`/servers/${server[0].id}/members/${member.id}`)
    }

    return (
        <button
            onClick={handleClick}
            className={cn(
                "w-full rounded-md px-2 py-2 mb-1 flex items-center gap-x-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition",
                id === urlId && "bg-zinc-700/20 dark:bg-zinc-700"
            )}
        >
            {icon}
            <UserAvatar src={profile?.imageUrl} />
            <p className="text-sm font-semibold text-[#5BC770] transition line-clamp-1">{userName}</p>
        </button>
    );
};
