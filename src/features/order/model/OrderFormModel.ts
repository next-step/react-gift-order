import { REGEX_PHONE_NUMBER } from "@/features/auth/constants/regex";
import { ValidationModel } from "@/shared/validations/createValidationDecorator";

import { NotEmpty,  NumberMin, Regex, String } from "@/shared/validations/validators";

export class OrderFormModel extends ValidationModel {
    @String()
    @NotEmpty({ message: "메시지를 입력해주세요" })
    message: string;

    @String()
    @NotEmpty({ message: "이름을 입력해주세요"})
    senderName: string;

    @String()
    @NotEmpty({ message: "이름을 입력해주세요" })
    receiverName: string;

    @String()
    @Regex(REGEX_PHONE_NUMBER, { message: "올바른 전화번호 형식이 아닙니다" })
    receiverPhoneNumber: string;

    @NumberMin(1, { message: "수량은 1 이상이어야 합니다" })
    quantity: number;

    constructor(
        message: string,
        senderName: string,
        receiverName: string,
        receiverPhoneNumber: string,
        quantity: number,
    ) {
        super();
        this.message = message;
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.receiverPhoneNumber = receiverPhoneNumber;
        this.quantity = quantity;
    }
    
}