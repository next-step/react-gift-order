import { deepFreeze } from '@/utils/deepFreeze';

export const NOT_FOUND_LABELS = deepFreeze({
  MAIN_MESSAGE: '잘못된 접근입니다.',
  SUB_MESSAGE: '찾으시는 페이지가 존재하지 않습니다.',
  HOME_BUTTON: '홈으로',
} as const);
