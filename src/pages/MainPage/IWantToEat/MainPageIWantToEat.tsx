import React from "react";

import "./MainPageIWantToEat.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";

const cnMainPageIWantToEat = cn("MainPageIWantToEat");

export const IWantToEat: React.FC = () => {
  return (
    <div className={cnMainPageIWantToEat()}>
      <Text>Хочу есть!</Text>
    </div>
  );
};
