import { useEffect } from 'react';
import ReceiverCurrentState from '@/components/Order/Receiver/ReceiverCurrentState.tsx';
import ReceiverModal from '@/components/Order/Receiver/ReceiverModal.tsx';
import { addHandler, cancleHandler, openModalHandler, submitHandler } from '@/hooks/order/receiver/useReceiverHandlers.ts';
import useReceiverModalControl from '@/hooks/order/receiver/useReceiverModalControl.ts';
import useReceiverValidation from '@/hooks/order/receiver/useReceiverValidation.ts';

export default function Receiver({ setCount, receiverForm }) {
  // 모달 상태 제어
  const { modal, setModal } = useReceiverModalControl();

  // form 상태 제어
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    submittedRef,
    beforeRef,
    values,
  } = receiverForm;

  // 번호 타당성 검사
  const { isSamePhoneNumber } = useReceiverValidation(values);

  // 각종 Handle
  const handleAdd = addHandler(fields.length, append);
  const handleCancle = cancleHandler(beforeRef, reset, setModal);
  const handleOpenModal = openModalHandler(beforeRef, getValues, setModal);
  const onSubmit = submitHandler(submittedRef, setModal);

  // count 세기
  useEffect(() => {
    if (submittedRef.current) {
      const total = submittedRef.current.reduce((acc, cur) => acc + Number(cur.count), 0);
      setCount(total);
    }
  }, [submittedRef.current]);

  return (
    <>
      <ReceiverCurrentState
        openModal={handleOpenModal}
        submittedRef={submittedRef.current}
      />

      {modal && (
        <ReceiverModal
          setModal={setModal}
          fields={fields}
          register={register}
          handleAdd={handleAdd}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          remove={remove}
          errors={errors}
          handleCancle={handleCancle}
          isSamePhoneNumber={isSamePhoneNumber}
        />
      )}
    </>
  )
}
