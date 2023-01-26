import { RouteObject } from "react-router-dom";

export type RouterConfig = {
  routeName: string;
  icon?: JSX.Element;
} & RouteObject;
