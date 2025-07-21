import React from "react";
import { SmallButton } from "./SmallButton";
import type { BUTTON_TYPES } from "../../constants/buttontypes";

interface TextBoxProps {
  backgroundColorType?: "default" | "yellow" | "blue";
  primaryText: string;
  secondaryText?: string;
  showSmallButton?: boolean;
  smallButtonType?: keyof typeof BUTTON_TYPES;
  onSmallButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  smallButtonChildren?: React.ReactNode;
}

export const TextBox = ({
  backgroundColorType = "default",
  primaryText,
  secondaryText,
  showSmallButton = true,
  smallButtonType,
  onSmallButtonClick,
  smallButtonChildren,
}: TextBoxProps) => {
  const backgroundClasses = {
    default: "bg-white",
    yellow: "bg-yellow-300",
    blue: "bg-blue-200",
  }[backgroundColorType];

  return (
    <div
      className={`flex items-center rounded-lg p-4  w-full  ${backgroundClasses}`}
    >
      {showSmallButton && (
        <div className="mr-4">
          <SmallButton type={smallButtonType} onClick={onSmallButtonClick}>
            {smallButtonChildren}
          </SmallButton>
        </div>
      )}
      <div className="flex flex-col">
        <p className="text-gray-800 font-bold">{primaryText}</p>
        {secondaryText && <p className="text-gray-600 ">{secondaryText}</p>}
      </div>
    </div>
  );
};

export default TextBox;
