/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type Props = {
  senderName: string;
  onChange: (value: string) => void;
  error?: string;
};

const SenderInfoSection = ({ senderName, onChange, error }: Props) => {
  return (
    <Container>
      <Title>보내는 사람</Title>
      <Input
        type="text"
        value={senderName}
        onChange={(e) => onChange(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Notice>* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</Notice>
    </Container>
  );
};

export default SenderInfoSection;

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
`;

const Title = styled.label`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  color:black;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red500};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  text-align: left;
  margin-top: 4px;
`;

const Notice = styled.div`
  font-size: 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray600};
`;
