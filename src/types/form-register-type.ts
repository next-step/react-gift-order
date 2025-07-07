import type { ChangeEvent } from "react";

export type Register<T> = <K extends keyof T>(
  field: K,
) => {
  name: string;
  value: T[K];
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | T[K],
  ) => void;
  onBlur: () => void;
  error: string | undefined;
  hasError: boolean;
};
