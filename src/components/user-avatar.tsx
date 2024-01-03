import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils/utils"

interface IUserAvatarProps {
    src: string,
    className?: string,
}

export const UserAvatar = ({ src, className }: UserAvatarProps) => {
    return (
        <Avatar className={cn(
            "w-7 h-7 md:w-10 md:h-10",
            className
        )}>
            <AvatarImage src={src || "https://github.com/shadcn.png"} className="object-cover object-top"/>
        </Avatar>
    )
}