import React from "react";

import "./MainPageFooter.css";
import { Informer } from "@consta/uikit/Informer";
import { cn } from "../../../utils/bem";

import Delivery from "../../../svg/Delivery.svg";

const cnMainPageFooter = cn("MainPageFooter");

export const MainPageFooter: React.FC = () => {
  return (
    <div className={cnMainPageFooter()}>
      <Delivery className={cnMainPageFooter("Image")} />
      <Informer
        className={cnMainPageFooter("Informer")}
        view="bordered"
        status="system"
        label="У нас бесконтактная доставка для вашей безопасности"
      />
    </div>
  );
};
