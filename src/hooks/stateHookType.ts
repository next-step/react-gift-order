export type StateHook<T> = {
  value: T;
  setValue: (value: T) => void;
};
