import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AdmProvider } from "./context/AdmContext.jsx";
import { JobProvider } from "./context/JobsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex h-full w-full min-h-full bg-zinc-950">
    <BrowserRouter>
     
      <AdmProvider>
      <JobProvider>

      <App />
      </JobProvider>
      </AdmProvider>
      </BrowserRouter>

    </div>
  </StrictMode>
);
