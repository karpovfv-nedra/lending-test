import React from "react";

import "./MainPagePreciseSelection.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { BasicSelect } from "@consta/uikit/BasicSelect";
import { useAtom, useAction } from "@reatom/react";
import { Badge } from "@consta/uikit/Badge";
import { Checkbox } from "@consta/uikit/Checkbox";
import {
  categoryCookAtom,
  produrtCookListAtom,
  setProdurtCookValueAction,
  produrtCookValueAtom,
  getBagebyId,
  wantItSharplyAction,
  wantItSharplyValueAtom,
} from "../../../modules/app/app";

const cnMainPagePreciseSelection = cn("MainPagePreciseSelection");

export const MainPagePreciseSelection: React.FC = () => {
  const categoryCook = useAtom(categoryCookAtom);
  const produrtCookList = useAtom(produrtCookListAtom);
  const produrtCookValue = useAtom(produrtCookValueAtom);
  const setProdurtCookValue = useAction(setProdurtCookValueAction);
  const wantItSharply = useAction(wantItSharplyAction);
  const wantItSharplyValue = useAtom(wantItSharplyValueAtom);

  if (categoryCook === null) {
    return null;
  }

  return (
    <div className={cnMainPagePreciseSelection()}>
      <Text className={cnMainPagePreciseSelection("InputLabel")} size="l">
        {(categoryCook?.id === "pizza" || categoryCook?.id === "pasta") &&
          "А какая больше по душе?"}
        {categoryCook?.id === "wok" && "А какой больше по душе?"}
      </Text>
      <div className={cnMainPagePreciseSelection("Form")}>
        <div className={cnMainPagePreciseSelection("InputWrapper")}>
          <BasicSelect
            id={cnMainPagePreciseSelection("Input")}
            className={cnMainPagePreciseSelection("Input")}
            size="l"
            placeholder="Выберите что будете  есть"
            options={produrtCookList}
            getOptionLabel={(item) => item.name}
            value={produrtCookValue}
            onChange={setProdurtCookValue}
          />
        </div>
        <Checkbox
          onChange={wantItSharply}
          checked={wantItSharplyValue}
          label="Поострее хочу!"
          size="l"
        />
      </div>
      {produrtCookValue?.badge && (
        <div className={cnMainPagePreciseSelection("BadgesWrapper")}>
          {produrtCookValue?.badge?.map((id) => {
            const badge = getBagebyId(id);
            return (
              <Badge
                key={cnMainPagePreciseSelection("Badge", { id })}
                className={cnMainPagePreciseSelection("Badge")}
                label={badge.name}
                status={badge.status}
                form="round"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
