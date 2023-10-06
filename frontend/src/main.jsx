import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom"; // Importez Routes et Route
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <AuthContextProvider>
        {" "}
        {/* Englobez votre application avec AuthContextProvider */}
        <App />
      </AuthContextProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        {" "}
        {/* Utilisez Routes pour définir vos nouvelles routes */}
        <Route path="/" element={<App />} />
        {/* Définissez vos autres routes ici */}
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);
