
import InitialModal from "./components/modals/initial-modal";
import MainLayout from "./layouts/main-layout";
import ServerPageLayout from "./layouts/sever-page-layout";
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
}

export default App;