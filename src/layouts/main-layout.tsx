import NavigationSidebar from "@/components/navigations/navigation-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full font-inter">
            <div className="hidden md:flex h-full w-[72px] flex-col fixed z-30 inset-y-0">
                <NavigationSidebar />
            </div>
            <div className="md:pl-[72px] h-full">{children}</div>
        </div>
    );
};

export default MainLayout;
