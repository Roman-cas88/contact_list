import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Root, {loader as rootLoader} from "./Routes/root";
import ErrorPage from "./error-page";
import Contact from "./Routes/contact";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
