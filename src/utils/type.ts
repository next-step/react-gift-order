export interface FormData {
  id: string;
  password: string;
}

export type ValidationErrors = {
  [K in keyof FormData]?: string;
};

export interface ValidationRule {
  condition: (value: string) => boolean;
  message: string;
}
