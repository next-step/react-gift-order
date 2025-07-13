import { useState, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { useReceiverContext } from "@/features/order/contexts/ReceiverContext";
import { ReceiversModel, type ReceiversModelType } from "@/features/order/model/ReceiverModel";
import { ReceiverFieldSet } from "@/features/order/ui/ReceiverFieldSet";

import { useModal } from "@/shared/hooks/useModal";
import { Button } from "@/shared/ui";

import * as Styles from "./ReceiverModal.styled";
import { zodResolver } from "@hookform/resolvers/zod";

export const ReceiverModal = () => {
    const modal = useModal();
    const { state, setState } = useReceiverContext();
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
    } = useForm<ReceiversModelType>({
        resolver: zodResolver(ReceiversModel),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: state,
        shouldFocusError: false,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "receivers",
    });

    useEffect(
        function initializeFormValuesOnModalOpen() {
            reset(state);
        },
        [reset, state],
    );

    const handleAppend = () => {
        append({ receiverName: "", phoneNumber: "", quantity: 1 });
        if (hasSubmitted) {
            clearErrors();
            setHasSubmitted(false);
        }
    };

    const handleRemove = (index: number) => {
        remove(index);
        if (hasSubmitted) {
            clearErrors();
            setHasSubmitted(false);
        }
    };

    return (
        <Styles.BackDrop>
            <Styles.Form>
                <Styles.Header>
                    <Styles.Title>받는 사람</Styles.Title>
                    <Styles.Info>
                        * 최대 10명까지 추가 할 수 있어요.
                        <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
                    </Styles.Info>

                    <Button
                        variant="secondary"
                        width="74px"
                        height="32px"
                        onClick={handleAppend}
                        type="button"
                    >
                        추가하기
                    </Button>
                </Styles.Header>

                <Styles.Container>
                    {fields.map((field, index) => (
                        <ReceiverFieldSet
                            key={field.id}
                            index={index}
                            onRemove={handleRemove}
                            register={register}
                            errors={hasSubmitted ? errors : {}}
                        />
                    ))}
                </Styles.Container>

                <Styles.Footer>
                    <Button
                        variant="secondary"
                        width="100%"
                        height="44px"
                        onClick={() => modal.close()}
                        type="button"
                    >
                        취소
                    </Button>

                    <Button
                        variant="primary"
                        width="100%"
                        height="44px"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setHasSubmitted(true);
                            handleSubmit((data) => {
                                console.log("ReceiverModal submitting data:", data);
                                setState({ receivers: data.receivers });
                                console.log("ReceiverModal data saved to context");
                                modal.close();
                            })(e);
                        }}
                        type="submit"
                    >
                        {fields.length}명 완료
                    </Button>
                </Styles.Footer>
            </Styles.Form>
        </Styles.BackDrop>
    );
};
