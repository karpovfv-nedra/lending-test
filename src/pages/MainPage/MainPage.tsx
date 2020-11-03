import React from "react";
import { AppHeader } from "../../containers/AppHeader/AppHeader";
import { IWantToEat } from "../IWantToEat/IWantToEat";

import "./MainPage.css";
import { cn } from "../../utils/bem";

const cnMainPage = cn("MainPage");

export function MainPage() {
  return (
    <div className={cnMainPage()}>
      <AppHeader />
      <div className={cnMainPage("Contrent")}>
        <IWantToEat />
      </div>
    </div>
  );
}
