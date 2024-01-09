import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./components/providers/modal-provider.tsx";
import "./index.css";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                    <ModalProvider />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
);
