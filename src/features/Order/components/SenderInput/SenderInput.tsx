import {
  Container,
  Title,
  InputContainer,
  InputText,
  SubText,
  ErrorText,
} from './SenderInput.styles';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface SenderInputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

const SenderInput = ({ register, error }: SenderInputProps) => {
  return (
    <Container>
      <Title>보내는 사람</Title>
      <InputContainer>
        <InputText {...register} />
        {error && <ErrorText>{error}</ErrorText>}
      </InputContainer>
      <SubText>
        * 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.
      </SubText>
    </Container>
  );
};

export default SenderInput;
