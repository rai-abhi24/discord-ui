import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import ServerPageLayout from "./layouts/server-page-layout";
import { ChannelPage } from "./pages/channel-page";
import path from "path";

const App = () => {
    return (
        <Routes>
            <Route
                path="servers/:serverId/channels/:channelId"
                element={
                    <MainLayout>
                        <ServerPageLayout>
                            <ChannelPage />
                        </ServerPageLayout>
                    </MainLayout>
                }
            />
            <Route
                path="servers/:serverId/members/:memberId"
                element={
                    <MainLayout>
                        <ServerPageLayout>
                            <ChannelPage />
                        </ServerPageLayout>
                    </MainLayout>
                }
            />
        </Routes>
    );
};

export default App;
