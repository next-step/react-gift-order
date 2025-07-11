export const PLACEHOLDERS = {
  NAME: '이름을 입력하세요.',
  PHONE: '전화번호를 입력하세요.',
  QUANTITY: '수량',
} as const;

export const LABELS = {
  DELETE: 'X',
  getReceiverTitle: (i: number) => `받는 사람 ${i + 1}`,
  RECEIVER_MODAL_TITLE: '받는 사람',
  RECEIVER_MODAL_DESCRIPTION:
    '* 최대 10명까지 추가 할 수 있어요.\n* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.',
  RECEIVER_FORM_TITLE: '받는 사람',
  EMPTY_RECEIVER_NOTICE: '받는 사람이 없습니다.\n받는 사람을 추가해주세요.',
  getAddOrEditText: (confirmed: boolean) => (confirmed ? '수정' : '추가'),
};

export const BUTTON_TEXT = {
  ADD: '추가하기',
  CANCEL: '취소',
  CONFIRM_COUNT: (count: number) => `${count}명 완료`,
};

export const TABLE_HEADERS = ['이름', '전화번호', '수량'] as const;
export const UNIT = {
  QUANTITY: '개',
};
