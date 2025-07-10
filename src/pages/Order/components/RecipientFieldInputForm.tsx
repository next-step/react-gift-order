import styled from "@emotion/styled";
import Divider from "@/components/common/Divider";
import Input from "@/pages/Order/components/Input";
import Close from "@/components/icons/Close";

const RecipientFieldInputForm = () => {
  return (
    <div>
      <TitleWrapper>
        <Title>받는 사람 {"1"}</Title>
        <CloseBtn type="button">
          <Close />
        </CloseBtn>
      </TitleWrapper>
      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <InputWrapper>
          <Input name="name" placeholder="이름을 입력하세요." value={""} onChange={undefined} errorMsg={undefined} />
        </InputWrapper>
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>전화번호</InputTitle>
        <Input
          name="phone"
          placeholder="전화번호를 입력하세요."
          value={undefined}
          onChange={undefined}
          errorMsg={undefined}
        />
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>수량</InputTitle>
        <Input name="quantity" type="number" value={undefined} onChange={undefined} errorMsg={undefined} />
      </InputWrapper>
    </div>
  );
};

export default RecipientFieldInputForm;

const TitleWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing1};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
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
