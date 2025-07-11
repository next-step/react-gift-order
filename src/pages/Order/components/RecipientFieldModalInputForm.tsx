import styled from "@emotion/styled";
import Divider from "@/components/common/Divider";
import Input from "@/pages/Order/components/Input";
import Close from "@/components/icons/Close";
import type { OrderFormType } from "@/pages/Order/components/Order";
import { useFormContext } from "react-hook-form";

interface RecipientFieldModalInputFormProps {
  index: number;
  remove: (index: number) => void;
}

const RecipientFieldModalInputForm = ({ index, remove }: RecipientFieldModalInputFormProps) => {
  const {
    register,
    clearErrors,
    formState: { errors },
  } = useFormContext<OrderFormType>();

  const removeRecipient = (index: number) => {
    clearErrors(`recipients.${index}`);
    remove(index);
  };

  return (
    <div>
      <TitleWrapper>
        <Title>받는 사람 {index + 1}</Title>
        <CloseBtn type="button" onClick={() => removeRecipient(index)}>
          <Close />
        </CloseBtn>
      </TitleWrapper>
      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <InputWrapper>
          <Input
            {...register(`recipients.${index}.name` as const)}
            placeholder="이름을 입력하세요."
            errorMsg={errors.recipients?.[index]?.name?.message}
          />
        </InputWrapper>
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>전화번호</InputTitle>
        <Input
          {...register(`recipients.${index}.phone` as const)}
          placeholder="전화번호를 입력하세요."
          errorMsg={errors.recipients?.[index]?.phone?.message}
        />
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>수량</InputTitle>
        <Input
          type="number"
          {...register(`recipients.${index}.quantity` as const)}
          placeholder="수량을 입력하세요."
          errorMsg={errors.recipients?.[index]?.quantity?.message}
        />
      </InputWrapper>
    </div>
  );
};

export default RecipientFieldModalInputForm;

const TitleWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing1};
  margin: ${({ theme }) => theme.spacing.spacing2} 0;
`;
const Title = styled.h2`
  font: ${({ theme }) => theme.typography.label1Bold};
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const InputTitle = styled.p`
  min-width: 3.75rem;
  font: ${({ theme }) => theme.typography.body1Regular};
`;
const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
