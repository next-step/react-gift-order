import type { UseFormRegister, FieldErrors } from "react-hook-form";

import { X } from "lucide-react";

import type { ReceiversModelType } from "@/features/order/model/ReceiverModel";

import { Button } from "@/shared/ui";
import { InputFieldGroup } from "@/shared/ui/Input";

import { VerticalSpacing } from "@/widgets/layouts/Spacing.styled";

import * as Styles from "./ReceiverFieldSet.styled";

export interface ReceiverFieldSetProps {
    index: number;
    onRemove: (index: number) => void;
    register: UseFormRegister<ReceiversModelType>;
    errors: FieldErrors<ReceiversModelType>;
}

export const ReceiverFieldSet = ({ index, onRemove, register, errors }: ReceiverFieldSetProps) => {
    const getFieldErrorMessage = (fieldName: "receiverName" | "phoneNumber" | "quantity") => {
        return errors.receivers?.[index]?.[fieldName]?.message || "";
    };

    return (
        <Styles.Wrapper>
            <Styles.Header>
                <Styles.Title>받는 사람 {index + 1}</Styles.Title>
                <Button
                    variant="ghost"
                    height="18px"
                    width="18px"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onRemove(index);
                    }}
                >
                    <X size={20} />
                </Button>
            </Styles.Header>

            <InputFieldGroup
                id={`receiver_name_${index}`}
                align="horizontal"
                label="이름"
                placeholder="이름을 입력하세요."
                {...register(`receivers.${index}.receiverName`)}
                error={getFieldErrorMessage("receiverName")}
            />

            <VerticalSpacing size="12px" />

            <InputFieldGroup
                id={`phone_number_${index}`}
                align="horizontal"
                label="전화번호"
                placeholder="01012341234"
                maxLength={11}
                {...register(`receivers.${index}.phoneNumber`)}
                error={getFieldErrorMessage("phoneNumber")}
            />

            <VerticalSpacing size="12px" />

            <InputFieldGroup
                id={`quantity_${index}`}
                type="number"
                align="horizontal"
                label="수량"
                placeholder="1"
                min={1}
                {...register(`receivers.${index}.quantity`, {
                    valueAsNumber: true,
                })}
                error={getFieldErrorMessage("quantity")}
            />
        </Styles.Wrapper>
    );
};
