"use client";
import React, { useContext } from "react";

import { IoReorderThreeOutline } from "../Applicationicon";
import { ModelsContext } from "@/contextApis/ModelContextProvider";
export default function NavHangBug() {
  const { isAppDrawer, setisAppDrawer, handelToggleAppDrawer } =
    useContext(ModelsContext);
  return (
    <div onClick={handelToggleAppDrawer} style={{ cursor: "pointer" }}>
      <IoReorderThreeOutline size={30} />
    </div>
  );
}
