import { Label, InputField, type InputChangeHandler } from '@/components';
import * as S from './styles';

interface SenderSectionProps {
  senderName: string;
  onSenderNameChange: InputChangeHandler;
  error?: string;
}

const SenderSection = ({
  senderName,
  onSenderNameChange,
  error,
}: SenderSectionProps) => {
  return (
    <S.Container>
      <S.SectionTitle>
        <Label variant="bold">보내는 사람</Label>
      </S.SectionTitle>
      <S.FormContent>
        <InputField
          placeholder="이름을 입력하세요."
          value={senderName}
          onChange={onSenderNameChange}
          description={error ? undefined : "* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다."}
          layout="vertical"
          error={error}
        />
      </S.FormContent>
    </S.Container>
  );
};

export default SenderSection; 