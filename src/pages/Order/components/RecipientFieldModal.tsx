import styled from "@emotion/styled";
import Input from "@/pages/Order/components/Input";
import Divider from "@/components/common/Divider";

const RecipientFieldModal = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default RecipientFieldModal;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
