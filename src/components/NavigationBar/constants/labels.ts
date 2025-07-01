import { deepFreeze } from '@/utils/deepFreeze';

export const NAVIGATION_BAR_LABELS = deepFreeze({
  BACK_BUTTON_ALT: '뒤로가기',
  SECTION_TITLE: '선물하기',
  PROFILE_BUTTON_ALT: '프로필',
} as const);
