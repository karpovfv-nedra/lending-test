import React from "react";

import "./MainPageIWantToEat.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { TextField } from "@consta/uikit/TextField";
import { useAtom, useAction } from "@reatom/react";
import { setUserNameAction, userNameAtom } from "../../../modules/app/app";

const cnMainPageIWantToEat = cn("MainPageIWantToEat");

export const MainPageIWantToEat: React.FC = () => {
  const name = useAtom(userNameAtom);
  const setName = useAction(setUserNameAction);

  return (
    <div className={cnMainPageIWantToEat()}>
      <Text className={cnMainPageIWantToEat("Title")} size="5xl" weight="bold">
        Хочу есть!
      </Text>
      <Text className={cnMainPageIWantToEat("SubTitle")} size="3xl">
        Одно блюдо. Быстро и вкусно
      </Text>
      <Text className={cnMainPageIWantToEat("InputLabel")} size="l">
        Как к вам обращаться?
      </Text>
      <TextField
        className={cnMainPageIWantToEat("Input")}
        size="l"
        placeholder="Очень приятно, Царь!"
        onChange={({ value }) => setName(value)}
        value={name}
      />
    </div>
  );
};
