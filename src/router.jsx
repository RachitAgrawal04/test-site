import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import SharePage from "./pages/SharePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "share", element: <SharePage /> },
    ],
  },
]);
