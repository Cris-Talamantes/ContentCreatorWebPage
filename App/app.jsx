import { useRoutes } from "react-router-dom";
import ViewCreator from "./src/pages/ViewCreator.tsx";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ViewCreator />,
    },
    {
      path: "/view/:id",
      element: <ViewCreator />,
    },
  ]);

  return routes;
}

export default App;