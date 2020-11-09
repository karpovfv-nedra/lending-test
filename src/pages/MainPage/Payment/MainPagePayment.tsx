import { Text } from "@consta/uikit/Text";
import React from "react";
import { cn } from "../../../utils/bem";
import "./MainPagePayment.css";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { Button } from "@consta/uikit/Button";
import { IconForward } from "@consta/uikit/IconForward";
import { useAtom, useAction } from "@reatom/react";
import {
  setCurrencyAction,
  currencyValueAtom,
  orderPriceAtom,
  currency,
} from "../../../modules/app/app";

const cnMainPagePayment = cn("MainPagePayment");

export const MainPagePayment: React.FC = () => {
  const setCurrency = useAction(setCurrencyAction);
  const currencyValue = useAtom(currencyValueAtom);
  const orderPrice = useAtom(orderPriceAtom);

  return (
    <div className={cnMainPagePayment()}>
      <Text className={cnMainPagePayment("Title")} size="3xl" align="center">
        Как будете платить?
      </Text>
      <div className={cnMainPagePayment("ChoiceGroupWrapper")}>
        <ChoiceGroup
          items={currency}
          getLabel={(item) => item.name}
          name={cnMainPagePayment("ChoiceGroup")}
          onChange={({ value }) => setCurrency(value)}
          value={currencyValue}
          multiple={false}
        />
      </div>
      <Text className={cnMainPagePayment("SumLabel")} size="xl" align="center">
        Сумма вашего заказа:
      </Text>
      <Text
        className={cnMainPagePayment("OrderPrice")}
        size="5xl"
        align="center"
        weight="bold"
      >
        {orderPrice} {String.fromCodePoint(currencyValue.image)}
      </Text>
      <div className={cnMainPagePayment("ButtonWrapper")}>
        <Button label="Начать готовить" iconRight={IconForward} size="l" />
      </div>
    </div>
  );
};
