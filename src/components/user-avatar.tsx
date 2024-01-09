import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils/utils";

interface IUserAvatarProps {
    src: string;
    className?: string;
}

export const UserAvatar = ({ src, className }: IUserAvatarProps) => {
    return (
        <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
            <AvatarImage
                src={src || "https://github.com/shadcn.png"}
                className="object-cover object-top"
            />
        </Avatar>
    );
};
