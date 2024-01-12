import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import ServerPageLayout from "./layouts/server-page-layout";
import { ChannelPage } from "./pages/channel-page";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
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
