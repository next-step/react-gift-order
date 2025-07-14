import { useEffect, useState } from 'react';

export default function useReceiverModalControl() {
  const [modal, setModal] = useState(false);

  // 모달 상태 스크롤 제어
  useEffect(() => {
    if (modal) { // 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else { // 다시 하용
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 사라질 때도 스크롤 생성
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return {
    modal, setModal
  }
}
