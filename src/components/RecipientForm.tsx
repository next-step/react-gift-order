import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import RecipientFields from "./RecipientFields";
import type { OrderFormValues } from "../schemas/orderSchema";

const RecipientForm: React.FC = () => {
    const { control, formState: { errors } } = useFormContext<OrderFormValues>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "recipients"
    });

    // recipients 에러 타입 명확히 지정
    const recipientsError =
        typeof errors.recipients?.message === "string"
            ? errors.recipients?.message
            : (errors.recipients && "root" in errors.recipients && (errors.recipients as { root?: { message?: string } }).root?.message) || undefined;

    return (
        <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: "bold", marginBottom: 8 }}>받는 사람</div>
            <button
                type="button"
                onClick={() => append({ name: "", phone: "", quantity: 1 })}
                disabled={fields.length >= 10}
                style={{
                    marginBottom: 16,
                    background: "#eee",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: 4,
                    cursor: fields.length >= 10 ? "not-allowed" : "pointer"
                }}
            >
                + 받는 사람 추가
            </button>
            <div>
                {fields.map((field, idx) => (
                    <RecipientFields
                        key={field.id}
                        index={idx}
                        remove={remove}
                        isRemovable={fields.length > 1}
                    />
                ))}
            </div>
            {recipientsError && (
                <div style={{ color: "red", fontSize: 13, marginTop: 8 }}>{recipientsError}</div>
            )}
            <div style={{ color: "#888", fontSize: 12, marginTop: 8 }}>
                * 최대 10명까지 추가할 수 있어요.<br />
                * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.<br />
                * 전화번호는 01012341234 형식만 가능합니다.
            </div>
        </div>
    );
};

export default RecipientForm; 