import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Add, Edit, ErrorPage, Layout, Posts } from "./pages";
import { Provider } from "react-redux";
import Store from "./redux/store";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "post/add",
        element: <Add />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
