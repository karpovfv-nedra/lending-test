import { declareAtom, declareAction } from "@reatom/core";
import {
  ThemePreset,
  presetGpnDark,
  presetGpnDefault,
} from "@consta/uikit/Theme";

const themes = ["default", "dark"] as const;
export type Theme = typeof themes[number];

export const mapTheme: Record<Theme, ThemePreset> = {
  default: presetGpnDefault,
  dark: presetGpnDark,
};

export const toogleThemeAction = declareAction();
export const themeAtom = declareAtom<Theme>(themes[0], (on) =>
  on(toogleThemeAction, (state) =>
    state === themes[0] ? themes[1] : themes[0]
  )
);
