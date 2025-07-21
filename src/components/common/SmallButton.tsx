import React from "react";

import { BUTTON_TYPES } from "../../constants/buttontypes";
import type { ButtonConfig } from "../../types/button";

interface SmallButtonProps {
  type?: keyof typeof BUTTON_TYPES;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const SmallButton = ({
  type = "PRIMARY",
  onClick,
  children,
}: SmallButtonProps) => {
  const buttonConfig: ButtonConfig | undefined = BUTTON_TYPES[type];

  if (!buttonConfig) {
    const defaultButtonConfig = BUTTON_TYPES.PRIMARY;
    return (
      <button
        className={`transition duration-200 ease-in-out ${defaultButtonConfig.className}`}
        onClick={onClick}
      >
        {children || defaultButtonConfig.text}
      </button>
    );
  }

  return (
    <button
      className={`transition duration-200 ease-in-out ${buttonConfig.className}`}
      onClick={onClick}
    >
      {children || buttonConfig.text}
    </button>
  );
};
