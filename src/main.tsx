import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import "@/index.css";

import { store } from "@/store/store";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </StrictMode>
);
