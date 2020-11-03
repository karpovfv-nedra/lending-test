export const category = [
  "drink-soft",
  "drink-hot",
  "drink-alcoholic",
  "wok",
  "pizza",
] as const;

export type Category = typeof category[number];

export type Product = {
  name: string;
  category: Category;
  cost: number;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  kilocalories: number;
};
