import React from "react";
import { useFormContext } from "react-hook-form";
import type { OrderFormValues } from "@/schemas/orderSchema";

interface RecipientFieldsProps {
    index: number;
    remove: (index: number) => void;
    isRemovable: boolean;
}

const RecipientFields: React.FC<RecipientFieldsProps> = ({ index, remove, isRemovable }) => {
    const {
        register,
        formState: { errors }
    } = useFormContext<OrderFormValues>();

    // 에러 메시지 추출
    const fieldErrors = errors.recipients?.[index] || {};

    return (
        <div style={{ border: "1px solid #eee", padding: 16, marginBottom: 12, borderRadius: 8 }}>
            <div style={{ marginBottom: 8, fontWeight: "bold" }}>받는 사람 {index + 1} {isRemovable && (
                <button type="button" onClick={() => remove(index)} style={{ marginLeft: 8, color: "red" }}>
                    삭제
                </button>
            )}</div>
            <div style={{ marginBottom: 8 }}>
                <input
                    {...register(`recipients.${index}.name` as const)}
                    placeholder="이름을 입력하세요."
                    style={{ width: "100%", padding: 8 }}
                />
                {fieldErrors.name && (
                    <div style={{ color: "red", fontSize: 12 }}>{fieldErrors.name.message}</div>
                )}
            </div>
            <div style={{ marginBottom: 8 }}>
                <input
                    {...register(`recipients.${index}.phone` as const)}
                    placeholder="전화번호를 입력하세요."
                    style={{ width: "100%", padding: 8 }}
                    maxLength={11}
                />
                {fieldErrors.phone && (
                    <div style={{ color: "red", fontSize: 12 }}>{fieldErrors.phone.message}</div>
                )}
            </div>
            <div>
                <input
                    type="number"
                    min={1}
                    {...register(`recipients.${index}.quantity` as const)}
                    placeholder="수량"
                    style={{ width: "100%", padding: 8 }}
                />
                {fieldErrors.quantity && (
                    <div style={{ color: "red", fontSize: 12 }}>{fieldErrors.quantity.message}</div>
                )}
            </div>
        </div>
    );
};

export default RecipientFields; 