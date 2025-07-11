export type StateHook<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};
