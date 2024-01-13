import NavigationAction from "./navigation-action";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "../theme-toggle";
import NavigationItem, { INavigationItemProps } from "./navigation-item";

export const servers: INavigationItemProps[] = [
    {
        id: "1",
        name: "🐼 code-with-abhi",
        imageUrl: "https://avatars.githubusercontent.com/u/108968015?v=4",
    },
    {
        id: "2",
        name: "let's-code",
        imageUrl:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "3",
        name: "new-server",
        imageUrl:
            "https://images.pexels.com/photos/9039243/pexels-photo-9039243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "4",
        name: "chai-aur-code",
        imageUrl:
            "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "5",
        name: "ravi-kant",
        imageUrl:
            "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

export const NavigationSidebar = () => {
    return (
        <div className="flex h-full w-full flex-col items-center space-y-4 bg-[#E3E5E8] py-3 dark:bg-[#1e1f22]">
            <NavigationAction />
            <Separator className="mx-auto h-0.5 w-10 rounded-md bg-white dark:bg-zinc-700" />
            <ScrollArea className="w-full flex-1">
                {servers.map((server) => (
                    <div key={server.id} className="mb-4">
                        <NavigationItem
                            id={server.id}
                            name={server.name}
                            imageUrl={server.imageUrl}
                        />
                    </div>
                ))}
            </ScrollArea>
            <div>
                <ThemeToggle />
            </div>
        </div>
    );
};
