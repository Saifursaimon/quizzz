import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Statistics from "./Components/Statistics/Statistics";
import Error from "./Components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home />,
        },
        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics />,
        },
        {
          path: "/blog",
          element: <Error />,
        },
        {
          path: "/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
