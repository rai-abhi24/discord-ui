import { servers } from "../navigations/navigation-sidebar";
import ServerHeader from "./server-header";

interface ServerSidebarProps {
    serverId: number;
}

const ServerSidebar = ({ serverId }: ServerSidebarProps) => {
    return (
        <div className="bg-[#F2F3F5] dark:bg-[#2B2D31] h-full flex flex-col">
            <ServerHeader server={servers} role="admin" />
        </div>
    );
};

export default ServerSidebar;
