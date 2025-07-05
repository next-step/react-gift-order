export interface FormData {
  id: string;
  password: string;
}

export type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

export interface ValidationRule<T = string> {
  condition: (value: T) => boolean;
  message: string;
}

export type ValidationRulesMap<T> = {
  [K in keyof T]: ValidationRule<T[K]>[];
};
