import { useState } from "react";
import styled from "@emotion/styled";
import {
    useFieldArray,
    useWatch,
    type Control,
    type FieldErrors,
    type UseFormRegister,
    type UseFormTrigger,
} from "react-hook-form";
import Modal from "@/components/Modal";

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.textDefault};
`;

export const OpenButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.color.semantic.backgroundDisabled};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.textDefault};
`;

export const Table = styled.table`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.color.gray.gray100};
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  ${({ theme }) => theme.typography.label.label1Bold};
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  ${({ theme }) => theme.typography.body.body2Regular};
`;

export const ModalTitle = styled.h3`
  ${({ theme }) => theme.typography.title.title2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.textSub};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const ReceiverBlock = styled.div`
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
  position: relative;
`;

export const ReceiverLabel = styled.h4`
  ${({ theme }) => theme.typography.subtitle.subtitle2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing4};
  right: ${({ theme }) => theme.spacing.spacing4};
  ${({ theme }) => theme.typography.label.label1Regular};
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.gray.gray600};
  cursor: pointer;
`;

export const Field = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const Label = styled.label`
  ${({ theme }) => theme.typography.label.label1Regular};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  ${({ theme }) => theme.typography.body.body2Regular};
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.semantic.textDefault};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.semantic.critical};
  ${({ theme }) => theme.typography.label.label2Regular};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.spacing6};
`;

export const Button = styled.button<{ primary?: boolean }>`
  flex: 1;
  margin: 0 ${({ theme }) => theme.spacing.spacing1};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: none;
  font-weight: bold;
  border-radius: 6px;
  background: ${({ theme, primary }) =>
        primary ? theme.color.semantic.kakaoYellow : theme.color.semantic.backgroundDisabled};
  color: ${({ theme, primary }) =>
        primary ? theme.color.semantic.textDefault : theme.color.semantic.textDefault};
  cursor: pointer;
  ${({ theme }) => theme.typography.body.body2Bold};
`;

interface Receiver {
    name: string;
    phone: string;
    quantity: number;
}

interface Props {
    register: UseFormRegister<any>;
    control: Control<any>;
    errors: FieldErrors;
    trigger: UseFormTrigger<any>;
}

export default function ReceiverModalSection({
    register,
    control,
    errors,
    trigger,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const { fields, append, remove } = useFieldArray({
        control,
        name: "receivers",
    });

    const receiverErrors =
        (errors.receivers as unknown as FieldErrors<Receiver>[]) || [];

    const handleClose = () => setIsOpen(false);

    const handleComplete = async () => {
        const isValid = await trigger("receivers");
        if (!isValid) return;
        handleClose();
    };

    const receiverValues = useWatch({ control, name: "receivers" }) || [];

    return (
        <Container>
            <TitleRow>
                <Title>받는 사람</Title>
                <OpenButton type="button" onClick={() => setIsOpen(true)}>
                    받는 사람 등록하기 ({fields.length}/10)
                </OpenButton>
            </TitleRow>

            {fields.length > 0 && (
                <Table>
                    <thead>
                        <tr>
                            <Th>이름</Th>
                            <Th>전화번호</Th>
                            <Th>수량</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((field, index) => (
                            <tr key={field.id}>
                                <Td>{receiverValues?.[index]?.name ?? ""}</Td>
                                <Td>{receiverValues?.[index]?.phone ?? ""}</Td>
                                <Td>{receiverValues?.[index]?.quantity ?? ""}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {isOpen && (
                <Modal onClose={handleClose}>
                    <ModalTitle>받는 사람 정보 입력</ModalTitle>
                    <Description>
                        최대 10명까지 추가할 수 있어요. <br />
                        받는 사람의 전화번호는 중복으로 입력할 수 없어요.
                    </Description>

                    <Button
                        type="button"
                        onClick={() =>
                            append({ name: "", phone: "", quantity: 1 })
                        }
                        disabled={fields.length >= 10}
                    >
                        + 추가하기
                    </Button>

                    {fields.map((field, index) => (
                        <ReceiverBlock key={field.id}>
                            <ReceiverLabel>받는 사람 {index + 1}</ReceiverLabel>
                            <RemoveButton type="button" onClick={() => remove(index)}>
                                ✕
                            </RemoveButton>

                            <Field>
                                <Label>이름</Label>
                                <Input
                                    type="text"
                                    placeholder="이름을 입력하세요."
                                    {...register(`receivers.${index}.name`)}
                                />
                                {receiverErrors?.[index]?.name && (
                                    <ErrorText>
                                        {receiverErrors?.[index]?.name?.message as string}
                                    </ErrorText>
                                )}
                            </Field>

                            <Field>
                                <Label>전화번호</Label>
                                <Input
                                    type="tel"
                                    placeholder="전화번호를 입력하세요."
                                    {...register(`receivers.${index}.phone`)}
                                />
                                {receiverErrors?.[index]?.phone && (
                                    <ErrorText>
                                        {receiverErrors?.[index]?.phone?.message as string}
                                    </ErrorText>
                                )}
                            </Field>

                            <Field>
                                <Label>수량</Label>
                                <Input
                                    type="number"
                                    placeholder="1"
                                    {...register(`receivers.${index}.quantity`, {
                                        valueAsNumber: true,
                                    })}
                                />
                                {receiverErrors?.[index]?.quantity && (
                                    <ErrorText>
                                        {receiverErrors?.[index]?.quantity?.message as string}
                                    </ErrorText>
                                )}
                            </Field>
                        </ReceiverBlock>
                    ))}

                    {typeof errors.receivers?.message === "string" && (
                        <ErrorText>{errors.receivers.message}</ErrorText>
                    )}

                    <Footer>
                        <Button onClick={handleClose}>취소</Button>
                        <Button
                            primary
                            type="button"
                            onClick={handleComplete}
                            disabled={fields.length === 0}
                        >
                            {fields.length}명 완료
                        </Button>
                    </Footer>
                </Modal>
            )}
        </Container>
    );
}
