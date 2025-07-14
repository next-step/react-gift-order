export const addHandler = (fieldsLength, append) => () => {
  if (fieldsLength < 10) {
    append({ name: '', phone: '', count: 1 });
  }
}

export const cancleHandler = (beforeRef, reset, setModal) => () => {
  // 취소 시, 이전 배열이 있으면 이전 시점으로 reset
  if (beforeRef.current) {
    reset(beforeRef.current);
  }
  setModal(false);
}

export const openModalHandler = (beforeRef, getValues, setModal) => () => {
  // 현재 배열 상태 저장
  beforeRef.current = getValues();
  setModal(true);
}

export const submitHandler = (submittedRef, setModal) => (data) => {
  console.log(data);
  submittedRef.current = data.receiverInfo;
  setModal(false);
}
