import Homepage from "./components/Homepage"
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";


const routes = [
    {
      path: `${import.meta.env.BASE_URL}`,
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: `${import.meta.env.BASE_URL}/about`,
      element: <About />,
      errorElement: <ErrorPage />,
    },
  ];

export default routes;