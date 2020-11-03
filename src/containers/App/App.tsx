import React from "react";

import "./App.css";
import { cn } from "../../utils/bem";

const cnApp = cn("App");

export const App: React.FC = ({ children }) => {
  return <div className={cnApp()}>{children}</div>;
};
