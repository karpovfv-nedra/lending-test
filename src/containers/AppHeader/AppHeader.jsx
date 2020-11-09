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
import { Text } from "@consta/uikit/Text";

const cnAppHeader = cn("AppHeader");

export const AppHeader = () => {
  const toogleTheme = useAction(toogleThemeAction);

  return (
    <Header
      className={cnAppHeader()}
      leftSide={
        <HeaderModule>
          <Text>Хочу есть</Text>
        </HeaderModule>
      }
      rightSide={
        <HeaderModule>
          <HeaderButton iconLeft={IconSun} onClick={toogleTheme} />
        </HeaderModule>
      }
    />
  );
};
