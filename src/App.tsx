import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import Repositories from "./routes/repositories/page";
import WorkInProgress from "./components/WorkInProgress";
import Auth from "./routes/auth/page";

function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Repositories />,
            },
            {
                path: "review",
                element: <WorkInProgress />,
            },
            {
                path: "cloud-security",
                element: <WorkInProgress />,
            },
            {
                path: "how-to-use",
                element: <WorkInProgress />,
            },
            {
                path: "settings",
                element: <WorkInProgress />,
            },
            {
                path: "support",
                element: <WorkInProgress />,
            },
        ],
    },
    {
        path: "/auth", 
        element: <Auth />, 
      },
]);
  return (
        <RouterProvider router={router} />
);
}

export default App
