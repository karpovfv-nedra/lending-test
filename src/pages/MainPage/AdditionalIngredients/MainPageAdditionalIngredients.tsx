import React from "react";

import "./MainPageAdditionalIngredients.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { useAtom, useAction } from "@reatom/react";
import {
  additionalIngredientListAtom,
  additionalIngredientsValueAtom,
  setAdditionalIngredientsAction,
  addUserIngredientsAction,
  AdditionalIngredient,
  userIngredientsAtom,
} from "../../../modules/app/app";
import { MultiCombobox } from "@consta/uikit/MultiCombobox";

const cnMainPageAdditionalIngredients = cn("MainPageAdditionalIngredients");

export const MainPageAdditionalIngredients: React.FC = () => {
  const additionalIngredients = useAtom(additionalIngredientListAtom);
  const userIngredients = useAtom(userIngredientsAtom);
  const additionalIngredientsValue = useAtom(additionalIngredientsValueAtom);
  const setAdditionalIngredients = useAction(setAdditionalIngredientsAction);
  const addUserIngredients = useAction(addUserIngredientsAction);

  if (additionalIngredients.length === 0) {
    return null;
  }

  const hadleCreate = (label: string) => {
    addUserIngredients(label);
    setAdditionalIngredients([
      {
        label,
        category: ["user"],
        cost: 150,
        weight: 300,
        proteins: 0,
        fats: 0,
        carbohydrates: 10,
        kilocalories: 100,
      },
      ...(additionalIngredientsValue ? additionalIngredientsValue : []),
    ]);
  };

  const handleChandge = (items: AdditionalIngredient[] | null) => {
    setAdditionalIngredients(items);
  };

  return (
    <div className={cnMainPageAdditionalIngredients()}>
      <Text className={cnMainPageAdditionalIngredients("InputLabel")} size="l">
        Что бы такого добавить?
      </Text>
      <div className={cnMainPageAdditionalIngredients("InputWrapper")}>
        <MultiCombobox
          id={cnMainPageAdditionalIngredients("Input")}
          className={cnMainPageAdditionalIngredients("Input")}
          size="l"
          placeholder="Дополнительные ингридиенты"
          onChange={handleChandge}
          value={additionalIngredientsValue}
          options={additionalIngredients}
          getOptionLabel={(item) => item.label}
          // onCreate={hadleCreate}
        />
        {/* <Text size="s" fontStyle="italic" view="secondary">
          Можете добавить свой вариант. Если мы найдём это на кухне, мы не
          пожалеем и добавим.
        </Text> */}
      </div>
    </div>
  );
};
