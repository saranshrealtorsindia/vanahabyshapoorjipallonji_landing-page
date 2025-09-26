"use client";
import { createContext, useCallback, useRef, useState } from "react";

export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [isModelOpen, setisModelOpen] = useState(false);
  const [isThanksOpen, setisThanksOpen] = useState(false);
  const [isAppDrawer, setisAppDrawer] = useState(false);

  const handelToggleModel = useCallback(() => {
    setisModelOpen((prev) => !prev);
    setisAppDrawer(false);
  }, []);

  const handelCloseThanksModel = useCallback(() => {
    setisThanksOpen(false);
  }, []);

  const handelToggleAppDrawer = useCallback(() => {
    setisAppDrawer((prev) => !prev);
  }, []);

  return (
    <ModelsContext.Provider
      value={{
        isModelOpen,
        setisModelOpen,
        handelToggleModel,
        isThanksOpen,
        setisThanksOpen,
        handelCloseThanksModel,
        isAppDrawer,
        setisAppDrawer,
        handelToggleAppDrawer,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
}
