import React from "react";

export const isClientSide = () => {
  return typeof window !== undefined;
};

export const isValidRef = (ref: React.RefObject<HTMLElement> | null) => {
  if (ref === null || ref.current === null || ref.current === undefined) {
    return false;
  }
  return true;
};
