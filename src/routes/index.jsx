import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import DiscoverPage from "~/pages/Discover/index.jsx";
import Articles from "~/pages/articles/index.jsx";
import RequestedArticles from "~/pages/requested-articles/index.jsx";
import Category from "~/pages/category/index.jsx";
import Weblayout from "~/layouts/web/index.jsx";
import QADashboard from "~/pages/qa/index.jsx";
import UnansweredQuestions from "~/pages/qa/unansweredQuestions/index.jsx";
import UnSolvedQuestions from "~/pages/qa/unSolvedQuestions/index.jsx";
import Categories from "~/pages/qa/categories/index.jsx";
import PopularQuestions from "~/pages/qa/popularQuestions/index.jsx";
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
        path: "/soru-cevap",
        element: <QADashboard />,
      },
      {
        path: "/cevaplanmamis-sorular",
        element: <UnansweredQuestions />,
      },
      {
        path: "/cozulmemis-sorular",
        element: <UnSolvedQuestions />,
      },
      {
        path: "/kategoriler",
        element: <Categories />,
      },
      {
        path: "/populaer-sorular",
        element: <PopularQuestions />,
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
