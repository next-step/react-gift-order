import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RecipientForm from "./RecipientForm";
import orderTemplates from "@/data/orderTemplates";
import { orderSchema } from "@/schemas/orderSchema";
import type { OrderFormValues } from "@/schemas/orderSchema";

const cardShadow = "0 4px 24px rgba(80, 80, 120, 0.10)";
const borderRadius = 16;
const mainColor = "#7B4FFF";
const accentBg = "#F6F3FF";
const errorColor = "#E74C3C";

const OrderForm: React.FC = () => {
    const methods = useForm<OrderFormValues>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            sender: "",
            recipients: [{ name: "", phone: "", quantity: 1 }],
            cardId: orderTemplates[0]?.id ?? 0,
            message: orderTemplates[0]?.defaultTextMessage ?? "",
        },
    });

    const { register, handleSubmit, watch, setValue, formState: { errors } } = methods;
    const selectedCardId = watch("cardId");

    const onSubmit = (data: any) => {
        alert("주문이 완료되었습니다!\n" + JSON.stringify(data, null, 2));
    };

    return (
        <FormProvider {...methods}>
            <div style={{
                maxWidth: 500,
                margin: "32px auto",
                background: "#fff",
                borderRadius,
                boxShadow: cardShadow,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 32,
            }}>
                <h2 style={{ textAlign: "center", color: mainColor, fontWeight: 700, marginBottom: 8, fontSize: 28 }}>주문하기</h2>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <RecipientForm />

                    {/* 축하카드 선택 */}
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: 12, color: mainColor, fontSize: 18 }}>축하카드 선택</div>
                        <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8 }}>
                            {orderTemplates.map((card) => (
                                <div
                                    key={card.id}
                                    style={{
                                        border: selectedCardId === card.id ? `2.5px solid ${mainColor}` : "1.5px solid #eee",
                                        borderRadius: 12,
                                        boxShadow: selectedCardId === card.id ? cardShadow : "none",
                                        padding: 4,
                                        background: accentBg,
                                        cursor: "pointer",
                                        transition: "box-shadow 0.2s, border 0.2s",
                                        outline: selectedCardId === card.id ? `2px solid ${mainColor}33` : "none"
                                    }}
                                    onClick={() => {
                                        setValue("cardId", card.id);
                                        setValue("message", card.defaultTextMessage);
                                    }}
                                >
                                    <img
                                        src={card.thumbUrl}
                                        alt="카드"
                                        style={{
                                            width: 72,
                                            height: 72,
                                            borderRadius: 8,
                                            objectFit: "cover",
                                            boxShadow: "0 2px 8px #eee"
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 메시지 입력 */}
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: 8, color: mainColor }}>메시지</div>
                        <textarea
                            {...register("message")}
                            placeholder="메시지를 입력하세요"
                            style={{
                                width: "100%",
                                minHeight: 60,
                                padding: 12,
                                borderRadius: 8,
                                border: `1.5px solid ${errors.message ? errorColor : '#ddd'}`,
                                fontSize: 16,
                                boxShadow: errors.message ? `0 0 0 2px ${errorColor}33` : undefined,
                                outline: "none",
                                resize: "vertical",
                                background: accentBg
                            }}
                        />
                        {errors.message && (
                            <div style={{ color: errorColor, fontSize: 13, marginTop: 4 }}>{errors.message.message as string}</div>
                        )}
                    </div>
                    {/* 보내는 사람 */}
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: 8, color: mainColor }}>보내는 사람</div>
                        <input
                            {...register("sender")}
                            placeholder="보내는 사람 이름"
                            style={{
                                width: "100%",
                                padding: 12,
                                borderRadius: 8,
                                border: `1.5px solid ${errors.sender ? errorColor : '#ddd'}`,
                                fontSize: 16,
                                boxShadow: errors.sender ? `0 0 0 2px ${errorColor}33` : undefined,
                                outline: "none",
                                background: accentBg
                            }}
                        />
                        {errors.sender && (
                            <div style={{ color: errorColor, fontSize: 13, marginTop: 4 }}>{errors.sender.message as string}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: 16,
                            background: mainColor,
                            color: "#fff",
                            border: "none",
                            borderRadius: 8,
                            fontWeight: 700,
                            fontSize: 18,
                            boxShadow: cardShadow,
                            cursor: "pointer",
                            marginTop: 8,
                            transition: "background 0.2s"
                        }}
                        onMouseOver={e => (e.currentTarget.style.background = "#5F2EEA")}
                        onMouseOut={e => (e.currentTarget.style.background = mainColor)}
                    >
                        주문하기
                    </button>
                </form>
            </div>
        </FormProvider>
    );
};

export default OrderForm; 