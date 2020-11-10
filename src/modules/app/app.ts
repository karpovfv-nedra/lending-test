import { declareAtom, declareAction, map, combine } from "@reatom/core";
import { useAction } from "@reatom/react";

import { products, additionalIngredients, categoryDrink } from "./mock";
import { Item as SnackBarItem } from "@consta/uikit/SnackBar";
import { cn } from "../../utils/bem";

export const categoryDrinkIds = [
  "drink-soft",
  "drink-hot",
  "drink-alcoholic",
] as const;
export type CategoryDrinkIds = typeof categoryDrinkIds[number];

export type CategoryDrink = { name: string; id: CategoryDrinkIds };

export const categoryCookIds = ["wok", "pizza", "pasta"] as const;
export type CategoryCookIds = typeof categoryCookIds[number];

export const categoryIds = [
  ...categoryDrinkIds,
  ...categoryCookIds,
  "user",
] as const;
export type CategoryIds = typeof categoryIds[number];

export type CategoryCook = {
  name: string;
  id: CategoryCookIds;
};

export const badgesIds = ["spicy", "fatty", "calories", "fire"] as const;
export type BadgesIds = typeof badgesIds[number];

export const badgeStatuses = [
  "normal",
  "success",
  "error",
  "warning",
  "system",
] as const;
export type BadgeStatus = typeof badgeStatuses[number];

const badges: Record<
  BadgesIds,
  {
    name: string;
    status: BadgeStatus;
  }
> = {
  spicy: {
    name: "остренько",
    status: "error",
  },
  fatty: {
    name: "жирненько",
    status: "warning",
  },
  calories: {
    name: "калорийненько",
    status: "warning",
  },
  fire: {
    name: "Огонь",
    status: "error",
  },
};

export type Currency = {
  name: string;
  id: "squirrelSkins" | "mintedCoin" | "deadSouls";
  rate: number;
  image: number;
};

export const currency: Currency[] = [
  {
    name: "Беличьи шкурки",
    id: "squirrelSkins",
    rate: 0.55,
    image: 128063,
  },
  {
    name: "Чеканная монета",
    id: "mintedCoin",
    rate: 0.35,
    image: 128176,
  },
  {
    name: "Мёртвые души",
    id: "deadSouls",
    rate: 0.1,
    image: 128123,
  },
];

export type Product = {
  name: string;
  category: CategoryIds;
  cost: number;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  kilocalories: number;
  badge?: BadgesIds[];
};

export type AdditionalIngredient = {
  label: string;
  category: CategoryIds[];
  cost: number;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  kilocalories: number;
  badge?: BadgesIds[];
};

export const getBagebyId = (id: BadgesIds) => badges[id];

export const setCatecoryCookAction = declareAction<CategoryCook | null>();
export const categoryCookAtom = declareAtom<CategoryCook | null>(null, (on) =>
  on(setCatecoryCookAction, (state, payload) => payload)
);

export const setUserNameAction = declareAction<string | null>();
export const userNameAtom = declareAtom<string | null>(null, (on) =>
  on(setUserNameAction, (state, payload) => payload)
);

export const setThinDoughAction = declareAction<boolean>();
export const thinDoughAtom = declareAtom<boolean>(false, (on) => [
  on(setThinDoughAction, (state, payload) => payload),
  on(setCatecoryCookAction, () => false),
]);

export const setDoublePortionAction = declareAction<boolean>();
export const doublePortionAtom = declareAtom<boolean>(false, (on) => [
  on(setDoublePortionAction, (state, payload) => payload),
  on(setCatecoryCookAction, () => false),
]);

export const produrtCookListAtom = map(categoryCookAtom, (category) => {
  if (!category) {
    return [];
  }
  return products.filter((product) => product.category === category?.id);
});

export const setProdurtCookValueAction = declareAction<Product | null>();
export const produrtCookValueAtom = declareAtom<Product | null>(null, (on) => [
  on(setProdurtCookValueAction, (state, payload) => payload),
  on(setCatecoryCookAction, () => null),
]);

export const wantItSharplyAction = declareAction();
export const wantItSharplyValueAtom = declareAtom<boolean>(false, (on) =>
  on(wantItSharplyAction, (state) => !state)
);

export const addUserIngredientsAction = declareAction<string>();

export const userIngredientsAtom = declareAtom<AdditionalIngredient[] | null>(
  null,
  (on) => [
    on(addUserIngredientsAction, (state, label) => [
      ...(state ? state : []),
      {
        label,
        category: ["user"],
        cost: 0,
        weight: 0,
        proteins: 0,
        fats: 0,
        carbohydrates: 0,
        kilocalories: 0,
      },
    ]),
  ]
);

export const additionalIngredientListAtom = map(
  combine({
    category: categoryCookAtom,
    produrt: produrtCookValueAtom,
    userIngredients: userIngredientsAtom,
  }),
  ({ category, produrt, userIngredients }) => {
    if (!category || !produrt) {
      return [];
    }

    return [
      ...(userIngredients ? userIngredients : []),
      ...additionalIngredients.filter((ingredient) =>
        ingredient.category.find((item) => item === category.id)
      ),
    ];
  }
);

export const setAdditionalIngredientsAction = declareAction<
  AdditionalIngredient[] | null
>();

export const additionalIngredientsValueAtom = declareAtom<
  AdditionalIngredient[] | null
>(null, (on) => [
  on(setAdditionalIngredientsAction, (state, payload) => payload),
  on(setCatecoryCookAction, () => null),
]);

export const setDrinkCategoryAction = declareAction<CategoryDrink | null>();
export const drinkCategoryValueAtom = declareAtom<CategoryDrink | null>(
  categoryDrink[0],
  (on) => [on(setDrinkCategoryAction, (state, payload) => payload)]
);

export const drinkListAtom = map(drinkCategoryValueAtom, (category) => {
  if (!category) {
    return [];
  }
  return products.filter((product) => product.category === category?.id);
});

export const setDrinkValueAction = declareAction<Product[] | null>();
export const drinkValueAtom = declareAtom<Product[] | null>(null, (on) => [
  on(setDrinkValueAction, (state, payload) => payload),
]);

const idTableDataAtom = cn("tableDataAtom");

export const defaultlieCoefficient = 1;
export const generateLieCoefficientAction = declareAction();
export const lieCoefficientAtom = declareAtom<number>(
  defaultlieCoefficient,
  (on) =>
    on(generateLieCoefficientAction, (state) => {
      let coefficient = 1;

      function generate() {
        coefficient = Math.floor(Math.random() * Math.floor(50)) / 100 + 1;
        if (state === coefficient) {
          generate();
        }
      }

      generate();

      return coefficient;
    })
);

type TableData = {
  id: string;
  name: string;
  cost: number;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  kilocalories: number;
};

function totalSum(
  total: TableData,
  increment: Omit<TableData, "id" | "name">
): TableData {
  return {
    ...total,
    cost: total.cost + increment.cost,
    weight: total.weight + increment.weight,
    proteins: total.proteins + increment.proteins,
    fats: total.fats + increment.fats,
    carbohydrates: total.carbohydrates + increment.carbohydrates,
    kilocalories: total.kilocalories + increment.kilocalories,
  };
}

export const tableDataAtom = map(
  combine({
    drink: drinkValueAtom,
    produrt: produrtCookValueAtom,
    additives: additionalIngredientsValueAtom,
    lieCoefficient: lieCoefficientAtom,
    doublePortion: doublePortionAtom,
  }),
  ({ drink, produrt, additives, lieCoefficient, doublePortion }) => {
    const all: TableData[] = [];

    function addCoefficient(number: number = 0) {
      return Math.floor(number * lieCoefficient);
    }

    function double(number: number = 0) {
      return doublePortion ? number * 2 : number;
    }

    if (produrt) {
      all.push({
        ...produrt,
        cost: double(produrt.cost),
        weight: double(produrt.weight),
        proteins: double(produrt.proteins),
        fats: double(produrt.fats),
        carbohydrates: double(produrt.carbohydrates),
        kilocalories: double(produrt.kilocalories),
        id: idTableDataAtom({ product: true }),
      });
    }

    additives &&
      additives.forEach(({ badge, category, ...item }) => {
        all.push({
          ...item,
          id: idTableDataAtom({ additive: true, ...item }),
          name: item.label,
        });
      });

    drink &&
      drink.forEach(({ badge, category, ...item }) => {
        all.push({
          ...item,
          id: idTableDataAtom({ drink: true, ...item }),
        });
      });

    if (all.length === 0) {
      return [];
    }

    return all.map((item) => ({
      ...item,
      carbohydrates: addCoefficient(item.carbohydrates),
      weight: addCoefficient(item.weight),
      proteins: addCoefficient(item.proteins),
      fats: addCoefficient(item.fats),
      kilocalories: addCoefficient(item.kilocalories),
    }));
  }
);

export const setCurrencyAction = declareAction<Currency | null>();
export const currencyValueAtom = declareAtom<Currency>(currency[0], (on) => [
  on(setCurrencyAction, (state, payload) => payload || currency[0]),
]);

export const orderPriceAtom = map(
  combine({
    currency: currencyValueAtom,
    tableData: tableDataAtom,
  }),
  ({ currency, tableData }) => {
    let sum: number = 0;

    tableData.forEach((item) => {
      sum += item.cost;
    });

    return Math.floor(sum * currency.rate);
  }
);

export const tableTotalAtom = map(tableDataAtom, (tableData) => {
  if (tableData.length === 0) {
    return null;
  }

  let total: TableData = {
    id: idTableDataAtom("TableDataTotal"),
    name: "Всего",
    cost: 0,
    weight: 0,
    proteins: 0,
    fats: 0,
    carbohydrates: 0,
    kilocalories: 0,
  };

  tableData.forEach((item) => {
    total = totalSum(total, item);
  });

  return total;
});

export const startСookingAction = declareAction();
export const startСookingTimeOutAction = declareAction();
export const sidebarAtom = declareAtom<SnackBarItem[]>([], (on) => [
  on(startСookingAction, () => {
    const item: SnackBarItem = {
      key: "item",
      message: "Начали готовить ваш заказ",
      status: "success",
      autoClose: true,
    };
    return [item];
  }),
  on(startСookingTimeOutAction, (state, payload) => {
    return [];
  }),
]);
