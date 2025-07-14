import {
  Title,
  SenderWrapper,
} from '@/components/Order/Sender/Sender.style.ts';
import SenderForm from '@/components/Order/Sender/SenderForm.tsx';
import { Controller, useFormContext } from 'react-hook-form';

export default function Sender() {
  const {
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <SenderWrapper>
      <Title>보내는 사람</Title>

      <Controller
        name="senderName"
        control={control}
        rules={{ required: '메시지를 입력해주세요.' }}
        render={({ field }) => (
          <SenderForm
            value={field.value}
            onChange={field.onChange}
            error={errors.senderName}
          />
        )}
      />
      {/*<SenderForm*/}
      {/*  handleSubmit={handleSubmit}*/}
      {/*  onSubmit={onSubmit}*/}
      {/*  register={register}*/}
      {/*  text={text}*/}
      {/*  setValue={setValue}*/}
      {/*  watchValidation={watchValidation}*/}
      {/*  trigger={trigger}*/}
      {/*  error={errors.sender}*/}
      {/*/>*/}
    </SenderWrapper>
  )
}

