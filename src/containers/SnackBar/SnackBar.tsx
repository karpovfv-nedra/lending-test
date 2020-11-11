import React from "react";
import { cn } from "../../utils/bem";
import "./SnackBar.css";
import { SnackBar as SnackBarConsta } from "@consta/uikit/SnackBar";
import { useAtom } from "@reatom/react";
import { sidebarAtom } from "../../modules/app/app";

const cnSnackBar = cn("SnackBar");

export const SnackBar: React.FC = () => {
  return (
    <SnackBarConsta className={cnSnackBar()} items={useAtom(sidebarAtom)} />
  );
};
