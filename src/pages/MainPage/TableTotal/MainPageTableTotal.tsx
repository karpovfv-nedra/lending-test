import React from "react";
import { cn } from "../../../utils/bem";
import "./MainPageTableTotal.css";
import { Text } from "@consta/uikit/Text";
import { useAtom } from "@reatom/react";
import { tableTotalAtom } from "../../../modules/app/app";

const cnMainPageTableTotal = cn("MainPageTableTotal");

export const MainPageTableTotal: React.FC = () => {
  const total = useAtom(tableTotalAtom);

  if (!total) {
    return null;
  }

  return (
    <div className={cnMainPageTableTotal()}>
      <Text size="s" className={cnMainPageTableTotal("Cell")}>
        {total.name}
      </Text>
      <Text size="s" className={cnMainPageTableTotal("Cell")} align="center">
        {total.weight}
      </Text>
      <Text size="s" className={cnMainPageTableTotal("Cell")} align="center">
        {total.proteins}
      </Text>
      <Text size="s" className={cnMainPageTableTotal("Cell")} align="center">
        {total.fats}
      </Text>
      <Text size="s" className={cnMainPageTableTotal("Cell")} align="center">
        {total.carbohydrates}
      </Text>
      <Text size="s" className={cnMainPageTableTotal("Cell")} align="center">
        {total.kilocalories}
      </Text>
    </div>
  );
};
