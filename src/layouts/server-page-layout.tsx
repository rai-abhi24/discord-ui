import { ServerSidebar } from "@/components/servers/server-sidebar";

const ServerPageLayout = ({ children }: { children: React.ReactNode }) => {
    const serverId = "1";
    return (
        <div className="h-full">
            <div className="fixed inset-y-0 z-20 hidden h-full w-60 flex-col md:flex">
                <ServerSidebar serverId={serverId} />
            </div>
            <main className="h-full md:pl-60">{children}</main>
        </div>
    );
};

export default ServerPageLayout;
