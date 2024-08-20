import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./components/Root";
import { Gallery } from "./pages/Gallery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArtPage } from "./pages/ArtPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Gallery />,
      },
      {
        path: "/art/:objectId",
        element: <ArtPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
