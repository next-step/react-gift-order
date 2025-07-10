import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';

// 인풋 필드 스타일
const inputField = css({
  width: '100%',
  padding: `${spacing.spacing3} ${spacing.spacing4}`,
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: '8px',
  marginBottom: spacing.spacing4,
  fontSize: '16px',
});

// 인풋 레이블 스타일
const inputLabel = css({
  width: '70px',
  ...typography.body2Regular,
  color: colors.textSub,
});

// 인풋 컨테이너 스타일
const inputContainer = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: spacing.spacing3,
});

// 수량 인풋 스타일
const quantityInput = css({
  width: '100%',
  padding: `${spacing.spacing3} ${spacing.spacing4}`,
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: '8px',
  marginBottom: spacing.spacing4,
  fontSize: '16px',
});

// 전체 감싸는 스타일
const wrapper = css({
  marginTop: 32,
  marginBottom: 32,
  border: '1px solid #eee',
  borderRadius: 8,
  padding: 24,
  position: 'relative',
});

// 삭제 버튼 스타일
const deleteButton = css({
    border: 'none',
    background: 'none',
    paddingLeft: 8,
    fontSize: 24,
});

function ReceiverInput({
  idx,
  receivers,
  setReceivers,
}: {
  idx: number;
  receivers: Array<{
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }>;
  setReceivers: React.Dispatch<React.SetStateAction<{
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[]>>;
}) {
  const receiver = receivers[idx];
  const handleChange = (field: string, value: string | number) => {
    setReceivers(receivers.map((r, i) => i === idx ? { ...r, [field]: value } : r));
  };
  const handleRemove = () => {
    setReceivers(receivers.filter((_, i) => i !== idx));
  };
  return (
    <div css={wrapper}>
      <div>
        받는 사람 {idx + 1}
        <button
          css={deleteButton}
          onClick={handleRemove}
        >
          &times;
        </button>
      </div>
      <div css={inputContainer}>
        <div css={inputLabel}>이름</div>
        <input
          css={inputField}
          type="text"
          placeholder="이름을 입력하세요."
          value={receiver.receiverName}
          onChange={e => handleChange('receiverName', e.target.value)}
        />
      </div>
      <div css={inputContainer}>
        <div css={inputLabel}>전화번호</div>
        <input
          css={inputField}
          type="text"
          placeholder="전화번호를 입력하세요."
          value={receiver.phoneNumber}
          onChange={e => handleChange('phoneNumber', e.target.value)}
        />
      </div>
      <div css={inputContainer}>
        <div css={inputLabel}>수량</div>
        <input
          css={quantityInput}
          type="number"
          min="1"
          value={receiver.quantity}
          onChange={e => handleChange('quantity', Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ReceiverInput;