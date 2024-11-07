import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainScreen from "../MainScreen";

export const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainScreen />,
        },
      ],
    },
  ]);