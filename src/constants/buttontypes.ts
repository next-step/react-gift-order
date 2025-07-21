import { type ButtonTypes } from "../types/button";

export const BUTTON_TYPES: ButtonTypes = {
  PRIMARY: {
    text: "확인",
    className:
      "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md",
  },
  GIFT_FRIENDS: {
    text: "+",
    className: "bg-yellow-300 rounded-xl text-black  w-10 h-10 text-xl",
  },
  NONE: {
    text: "",
    className: "hidden",
  },
};
