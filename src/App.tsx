import MainLayout from "./layouts/main-layout";
import ServerPageLayout from "./layouts/server-page-layout";
import ServerPage from "./pages/server-page";

const App = () => {
    return (
        <>
            <MainLayout>
                <ServerPageLayout>
                    <ServerPage />
                </ServerPageLayout>
            </MainLayout>
        </>
    );
};

export default App;
