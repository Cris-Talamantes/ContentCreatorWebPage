import { useRoutes } from "react-router-dom";
import ViewCreator from "./src/pages/ViewCreator.jsx";
import EditCreator from "./src/pages/EditCreator.jsx";
import AddCreator from "./src/pages/AddCreator.jsx";
import ShowCreator from "./src/pages/ShowCreator.jsx";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ShowCreator />,
    },
    {
      path: "/view/:id",
      element: <ViewCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/new",
      element: <AddCreator />,
    },
  ]);

  return routes;
}

export default App;