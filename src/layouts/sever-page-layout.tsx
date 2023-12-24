import ServerSidebar from "@/components/servers/server-sidebar";

const ServerPageLayout = (
    { children }: { children: React.ReactNode }
) => {
    const serverId = 1;
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full flex-col w-60 fixed z-20 inset-y-0">
                <ServerSidebar serverId={serverId} />
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    );
}

export default ServerPageLayout;