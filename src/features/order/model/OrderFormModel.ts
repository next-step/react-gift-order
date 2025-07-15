import { ValidationModel } from "@/shared/validations/createValidationDecorator";

import { NotEmpty,  NumberMin, String } from "@/shared/validations/validators";

export class OrderFormModel extends ValidationModel {
    @String()
    @NotEmpty({ message: "메시지를 입력해주세요" })
    message: string;

    @String()
    @NotEmpty({ message: "이름을 입력해주세요"})
    senderName: string;

    @NumberMin(1, { message: "수량은 1 이상이어야 합니다" })
    quantity: number;

    constructor(
        message: string,
        senderName: string,
        quantity: number,
    ) {
        super();
        this.message = message;
        this.senderName = senderName;
        this.quantity = quantity;
    }
    
}