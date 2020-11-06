import "./AppHeader.css";

import React from "react";
import {
  Header,
  HeaderModule,
  HeaderLogin,
  HeaderButton,
} from "@consta/uikit/Header";
import { useAction } from "@reatom/react";
import { toogleThemeAction } from "../../modules/theme/theme";
import { IconSun } from "@consta/uikit/IconSun";
import { IconHamburger } from "@consta/uikit/IconHamburger";
import { cn } from "../../utils/bem";

const cnAppHeader = cn("AppHeader");

export const AppHeader = () => {
  const toogleTheme = useAction(toogleThemeAction);

  return (
    <Header
      className={cnAppHeader()}
      leftSide={
        <>
          <HeaderModule>
            <HeaderButton iconLeft={IconHamburger} />
          </HeaderModule>
        </>
      }
      rightSide={
        <>
          <HeaderModule>
            <HeaderButton iconLeft={IconSun} onClick={toogleTheme} />
          </HeaderModule>
        </>
      }
    />
  );
};
