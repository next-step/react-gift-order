import SectionTitle from '@/components/SectionTitle';
import TextInputBox from '@/components/TextInputBox';
import { useFormContext } from 'react-hook-form';

const SenderInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <SectionTitle title="보내는 사람" />
      <TextInputBox
        placeholder="이름을 입력하세요"
        {...register('senderName')}
        errorMessage={errors.senderName?.message as string | undefined}
      />
    </div>
  );
};

export default SenderInfo;
