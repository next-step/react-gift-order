/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const SenderInfoSection = ({ value, onChange, error }: Props) => {
  return (
    <>
      <Title>보내는 사람 이름</Title>
      <SenderNameInput
        value={value}
        onChange={onChange}
        placeholder="이름을 입력하세요"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Notice>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Notice>
    </>
  );
};

const SenderNameInput = styled.input`
  width: 90%;
  height: 20px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  text-align: left;
`;

const Notice = styled.div`
  font-size: 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray600};
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  text-align: left;
`;

export default SenderInfoSection;
