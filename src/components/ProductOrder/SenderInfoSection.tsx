import { useFormContext } from 'react-hook-form';

const SenderInfoSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>보내는 사람 이름</label>
      <input
        {...register('senderName', { required: '이름을 입력해주세요.' })}
      />
      {errors.receiverName?.message &&
        typeof errors.receiverName.message === 'string' && (
          <p>{errors.receiverName.message}</p>
        )}
    </div>
  );
};

export default SenderInfoSection;
