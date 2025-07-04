// src/hooks/useMsgForm.ts
import { useState, useCallback, type ChangeEvent } from 'react';

interface MsgFormHook {
  msg: string;
  msgError: string;
  handleMsgChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; // textarea만 처리
  validateMsg: () => boolean;
  setMsg: (value: string) => void; // 외부에서 msg 값을 직접 설정할 수 있도록 추가 (useEffect에서 사용)
  resetMsg: () => void;
}

export const useMsgForm = (): MsgFormHook => {
  const [msg, setMsg] = useState<string>('');
  const [msgError, setMsgError] = useState<string>('');

  const handleMsgChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMsg(e.target.value);
      // 입력 시 에러 메시지 초기화
      if (msgError) {
        setMsgError('');
      }
    },
    [msgError]
  );

  const validateMsg = useCallback((): boolean => {
    if (msg.trim() === '') {
      setMsgError('메시지를 입력해주세요.');
      return false;
    }
    setMsgError('');
    return true;
  }, [msg]);

  const resetMsg = useCallback(() => {
    setMsg('');
    setMsgError('');
  }, []);

  return {
    msg,
    msgError,
    handleMsgChange,
    validateMsg,
    setMsg, // 외부 노출
    resetMsg,
  };
};
