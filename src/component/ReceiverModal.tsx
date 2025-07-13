import { Div100p, EmptyDiv12h, EmptyDiv24h, EmptyDiv8h, ErrorText, LowField, MiniText, ModalBox, ModalDiv, SideBlankDiv, SimpleInput, SubTitle } from '@/styles/Common.styled';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';


type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const ReceiverModal = ({ isOpen, onClose }: Props) => {


    const [receiverNumber, setReceiverNumber] = useState(1);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            receiver: [{ name: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "receiver",
    });



    return (
        <ModalDiv isOpen={isOpen}>
            <ModalBox>
                <EmptyDiv8h />
                <SideBlankDiv>
                    <SubTitle>받는 사람</SubTitle>
                    <EmptyDiv12h />
                    <form>
                        <button type="button" onClick={() => append({ name: "" })}>
                            추가
                        </button>
                        {fields.map((field, i) => (
                            <div key={i}>
                                <LowField>
                                    <button type="button" onClick={() => remove(i)}>
                                        삭제
                                    </button>
                                    <MiniText>이름</MiniText>
                                    <Div100p>
                                        <SimpleInput
                                            type="text"
                                            placeholder="이름을 입력하세요."
                                            {...register(`receiver.${i}.name`, {
                                                required: 'Name is required',
                                                maxLength: {
                                                    value: 20,
                                                    message: 'Name Cannot exceed 20 characters'
                                                },
                                                validate: value => value !== 'admin' || 'Name cannot be admin'
                                            })}
                                        />
                                        {errors.receiver?.[i]?.message && (
                                            <ErrorText>{errors.receiver[i].name?.message}</ErrorText>
                                        )}
                                    </Div100p>
                                </LowField>

                                {/*
                    <EmptyDiv8h />

                    <LowField>
                        <MiniText>전화번호</MiniText>
                        <Div100p>
                            <SimpleInput
                                type="text"
                                placeholder="전화번호를 입력하세요."
                                value={recipientPhoneInput.value}
                                onChange={recipientPhoneInput.onChange}
                            />
                            {recipientPhoneInput.error && (
                                <ErrorText>{recipientPhoneInput.error}</ErrorText>
                            )}
                        </Div100p>
                    </LowField>
                    <EmptyDiv8h />

                    <LowField>
                        <MiniText>수량</MiniText>
                        <Div100p>
                            <SimpleInput
                                type="number"
                                min={1}
                                value={quantityInput.value}
                                onChange={quantityInput.onChange}
                            />
                            {quantityInput.error && (
                                <ErrorText>{quantityInput.error}</ErrorText>
                            )}
                        </Div100p>'
                    
                    </LowField>
                    */}
                            </div>
                        ))}
                    </form>
                    <EmptyDiv8h />

                </SideBlankDiv>
                <EmptyDiv24h />

                <button onClick={onClose}>취소</button>
                <button type="submit">{receiverNumber}명 완료</button>
            </ModalBox>
        </ModalDiv>
    );
};

export default ReceiverModal;