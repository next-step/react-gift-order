import {
  InfoList,
  ModalBottomBtn,
  ModalCancleBtn,
  ModalFinishBtn, ReceiverForm,
  ReceiverIndex,
} from '@/components/Order/Receiver/Receiver.style.ts';
import ReceiverInput from '@/components/Order/Receiver/ReceiverInput.tsx';
import { isValidPhoneFlexible } from '@/utils/phoneValidation.ts';

export default function ReceiverFormList(
  {
    fields,
    register,
    handleSubmit,
    onSubmit,
    remove,
    errors,
    isSamePhoneNumber,
    handleCancle,
  }
) {
  return (
    <ReceiverForm onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <InfoList key={field.id} isLast={index === fields.length - 1}>
          <ReceiverIndex>
            <span>받는 사람 {index + 1}</span>
            <button type="button" onClick={() => remove(index)}>X</button>
          </ReceiverIndex>

          <ReceiverInput
            label="이름"
            name={`receiverInfo.${index}.name`}
            placeholder="이름을 입력하세요."
            register={register}
            error={errors?.receiverInfo?.[index]?.name}
          />

          <ReceiverInput
            label="전화번호"
            name={`receiverInfo.${index}.phone`}
            placeholder="전화번호를 입력하세요."
            register={register}
            rules={{
              validate: {
                format: value => isValidPhoneFlexible(value) || '전화번호 형식이 올바르지 않습니다',
                duplicate: value => isSamePhoneNumber(value, index),
              }
            }}
            error={errors?.receiverInfo?.[index]?.phone}
          />

          <ReceiverInput
            type="number"
            label="수량"
            name={`receiverInfo.${index}.count`}
            register={register}
            rules={{
              validate: {
                positive: value => value > 0 || '구매 수량은 1개 이상이어야 해요.',
              }
            }}
            error={errors?.receiverInfo?.[index]?.count}
          />

        </InfoList>
      ))}

      <ModalBottomBtn>
        <ModalCancleBtn onClick={handleCancle}>취소</ModalCancleBtn>
        <ModalFinishBtn type="submit">완료</ModalFinishBtn>
      </ModalBottomBtn>
    </ReceiverForm>
  );
}
