import React, { useEffect } from "react";

import "./App.css";
import { cn } from "../../utils/bem";
import { useAtom } from "@reatom/react";
import { themeAtom, mapTheme } from "../../modules/theme/theme";
import { SnackBar } from "../SnackBar/SnackBar";

import { cnTheme, Theme } from "@consta/uikit/Theme";

const cnApp = cn("App");

export const App: React.FC = ({ children }) => {
  const theme = useAtom(themeAtom);

  useEffect(() => {
    const mods = {
      ...mapTheme[theme],
      color: mapTheme[theme].color.primary,
    };

    document.querySelector("html")?.setAttribute("class", cnTheme(mods));
  }, [theme]);

  return (
    <Theme className={cnApp()} preset={mapTheme[theme]}>
      {children}
      <SnackBar />
    </Theme>
  );
};
