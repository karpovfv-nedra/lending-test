import React from "react";
import { cn } from "../../utils/bem";
import "./SnackBar.css";
import { SnackBar as SnackBarConsta } from "@consta/uikit/SnackBar";
import { useAtom, useAction } from "@reatom/react";
import { sidebarAtom, startСookingTimeOutAction } from "../../modules/app/app";

const cnSnackBar = cn("SnackBar");

export const SnackBar: React.FC = () => {
  const startСookingTimeOut = useAction(startСookingTimeOutAction);

  const sidebar = useAtom(sidebarAtom).map((item) => ({
    ...item,
    onClose: startСookingTimeOut,
  }));

  return <SnackBarConsta className={cnSnackBar()} items={sidebar} />;
};
