import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
                route("/view/:id", "routes/viewCreator.tsx"),
] satisfies RouteConfig;
