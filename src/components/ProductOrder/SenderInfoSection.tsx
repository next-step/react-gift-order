import { useFormContext, Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import InputOrder from '@/common/InputOrder';

const SenderInfoSection = () => {
  const { control } = useFormContext();

  return (
    <Section>
      <Title>보내는 사람 이름</Title>

      <Controller
        name="senderName"
        control={control}
        rules={{ required: '이름을 입력해주세요.' }}
        render={({ field, fieldState }) => (
          <InputOrder
            placeholder="이름을 입력하세요."
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Hint>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Hint>
    </Section>
  );
};

export default SenderInfoSection;

const Section = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Hint = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 8px;
`;
