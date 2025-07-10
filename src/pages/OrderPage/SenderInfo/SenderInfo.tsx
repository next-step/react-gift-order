import SectionTitle from '@/components/SectionTitle';
import TextInputBox from '@/components/TextInputBox';

interface SenderInfoProps {
  senderName: string;
  onChangeSenderName: (value: string) => void;
  isSubmitted: boolean;
}

const SenderInfo = ({ senderName, onChangeSenderName, isSubmitted }: SenderInfoProps) => {
  const errorMessage =
    isSubmitted && senderName.trim() === '' ? '보내는 사람 이름이 반드시 입력 되어야 해요.' : '';

  return (
    <div>
      <SectionTitle title="보내는 사람" />
      <TextInputBox
        placeholder="이름을 입력하세요"
        value={senderName}
        onChange={onChangeSenderName}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default SenderInfo;
