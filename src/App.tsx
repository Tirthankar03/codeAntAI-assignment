import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import Repositories from "./routes/repositories/page";

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
                element: <h1 className="title">AI Code Review</h1>,
            },
            {
                path: "cloud-security",
                element: <h1 className="title">Cloud Security</h1>,
            },
            {
                path: "how-to-use",
                element: <h1 className="title">How to use</h1>,
            },
            {
                path: "settings",
                element: <h1 className="title">Settings</h1>,
            },
            {
                path: "support",
                element: <h1 className="title">Support</h1>,
            },
            {
                path: "logout",
                element: <h1 className="title">Logout</h1>,
            },

        ],
    },
]);
  return (
        <RouterProvider router={router} />
);
}

export default App
