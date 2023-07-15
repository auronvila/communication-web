import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import DiscoverPage from "~/pages/Discover/index.jsx";
import Articles from "~/pages/articles/index.jsx";
import RequestedArticles from "~/pages/requested-articles/index.jsx";
import Category from "~/pages/category/index.jsx";
import Weblayout from "~/layouts/web/index.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Weblayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/kesfet",
        element: <DiscoverPage />,
      },
      {
        path: "/makaleler",
        element: <Articles />,
      },
      {
        path: "/ders-istekleri",
        element: <RequestedArticles />,
      },
      {
        path: "/:categorySlug",
        element: <Category />,
      },
    ],
  },
]);

export default routes;
