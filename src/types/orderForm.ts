export interface TextFieldState {
  text: string;
  check: boolean;
}

export interface PhoneFiledState extends TextFieldState {
  checkPhoneForm: boolean;
}
