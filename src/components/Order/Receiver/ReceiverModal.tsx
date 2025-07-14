
import {
  BaseContainer,
  BlurContainer,
  ModalAddBtn,
  ModalText,
  ModalTitle,
} from '@/components/Order/Receiver/Receiver.style.ts';
import ReceiverFormList from '@/components/Order/Receiver/ReceiverFormList.tsx';

export default function ReceiverModal(
  {
    setModal,
    fields,
    register,
    handleAdd,
    handleSubmit,
    onSubmit,
    remove,
    errors,
    handleCancle,
    isSamePhoneNumber,
  }) {
  return (
    <>
      <BlurContainer onClick={() => setModal(false)} />
      <BaseContainer>
        <ModalTitle>받는 사람</ModalTitle>
        <ModalText>* 최대 10명까지 추가할 수 있어요.</ModalText>
        <ModalText>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</ModalText>
        <ModalAddBtn onClick={handleAdd}>추가하기</ModalAddBtn>

        <ReceiverFormList
          fields={fields}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          remove={remove}
          errors={errors}
          isSamePhoneNumber={isSamePhoneNumber}
          handleCancle={handleCancle}
        />
      </BaseContainer>
    </>
  )
}
