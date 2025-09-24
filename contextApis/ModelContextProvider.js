"use client";
import { createContext, useCallback, useRef, useState } from "react";

export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [isModelOpen, setisModelOpen] = useState(true);
  const [isThanksOpen, setisThanksOpen] = useState(false);

  const handelToggleModel = useCallback(() => {
    setisModelOpen((prev) => !prev);
  }, []);

  const handelCloseThanksModel = useCallback(() => {
    setisThanksOpen(false);
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
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
}
