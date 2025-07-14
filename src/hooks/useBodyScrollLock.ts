import { useEffect } from 'react';

/**
 * 모달이나 팝업이 열릴 때 body의 스크롤을 제어하는 커스텀 훅
 * @param isLocked - 스크롤을 잠글지 여부
 */
export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    // 현재 body의 overflow 값을 저장
    const originalOverflow = document.body.style.overflow;
    const originalOverflowX = document.body.style.overflowX;
    const originalOverflowY = document.body.style.overflowY;

    // 스크롤 잠금
    document.body.style.overflow = 'hidden';

    // 클린업 함수: 원래 overflow 값으로 복원
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overflowX = originalOverflowX;
      document.body.style.overflowY = originalOverflowY;
    };
  }, [isLocked]);
};
