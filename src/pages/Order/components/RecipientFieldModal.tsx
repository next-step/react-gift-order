import styled from "@emotion/styled";
import Divider from "@/components/common/Divider";
import RecipientFieldModalInputForm from "./RecipientFieldModalInputForm";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { OrderFormType, RecipientType } from "@/pages/Order/components/Order";
import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import ErrorMsg from "./ErrorMsg";

interface RecipientFieldModalProps {
  onClose: () => void;
  initialRecipients: RecipientType[];
}

const RecipientFieldModal = ({ onClose, initialRecipients: initialRecipientsProp }: RecipientFieldModalProps) => {
  const {
    control,
    trigger,
    setValue,
    getValues,
    clearErrors,
    formState: { errors },
  } = useFormContext<OrderFormType>();
  const { fields, append, remove } = useFieldArray({ control, name: "recipients" });
  const initialRecipients = useRef(initialRecipientsProp);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const confirmRecipients = async () => {
    const isValid = await trigger("recipients");
    if (isValid) {
      setValue("recipients", getValues("recipients"));
      onClose();
    }
  };
  const cancelRecipients = () => {
    setValue("recipients", initialRecipients.current);
    clearErrors("recipients");
    onClose();
  };
  const isValidAddBtn = fields.length < 10;
  return (
    <Container>
      <Content>
        <div>
          <Title>받는 사람</Title>
          <Divider spacing="0.25rem" />
          <HelpMsg>* 최대 10명까지 추가할 수 있어요.</HelpMsg>
          <HelpMsg>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</HelpMsg>
          {errors.recipients && <ErrorMsg>{errors.recipients.message}</ErrorMsg>}
          <Divider spacing="0.5rem" />
          <AddBtn type="button" onClick={() => append({ name: "", phone: "", quantity: 1 })} disabled={!isValidAddBtn}>
            추가하기
          </AddBtn>
        </div>
        <FieldWrapper>
          {fields.map((item, index) => (
            <RecipientFieldModalInputForm key={item.id} index={index} remove={remove} />
          ))}
        </FieldWrapper>
        <BtnWrapper>
          <CancelBtn type="button" onClick={cancelRecipients}>
            취소
          </CancelBtn>
          <ConfirmBtn type="button" onClick={confirmRecipients}>
            {fields.length}명 완료
          </ConfirmBtn>
        </BtnWrapper>
      </Content>
    </Container>
  );
};

export default RecipientFieldModal;

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1000;
  inset: 0;
  padding: ${({ theme }) => theme.spacing.spacing14} ${({ theme }) => theme.spacing.spacing4};
`;
const Content = styled.div`
  max-width: 37.5rem;
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing6};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;
const Title = styled.h3`
  width: 100%;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const HelpMsg = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.gray800};
`;
const AddBtn = styled.button<ComponentPropsWithoutRef<"button">>`
  ${({ theme }) => {
    return `
      background-color: ${theme.color.backgroundColor.fill}
      font: ${theme.typography.label1Regular};
      padding: ${theme.spacing.spacing2} ${theme.spacing.spacing4};
    `;
  }}
  border: none;
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
const FieldWrapper = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  & > div:not(:first-to-type) {
    border-top: 1px solid ${({ theme }) => theme.color.gray500};
    padding-top: ${({ theme }) => theme.spacing.spacing2};
    margin-top: ${({ theme }) => theme.spacing.spacing4};
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const CancelBtn = styled.button`
  font: ${({ theme }) => theme.typography.body2Regular};
  border: none;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  flex: 1 1 0%;
  cursor: pointer;
`;
const ConfirmBtn = styled.button`
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  font: ${({ theme }) => theme.typography.body2Regular};
  border: none;
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing6};
  flex: 3 1 0%;
  cursor: pointer;
`;
