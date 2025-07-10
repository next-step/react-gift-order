import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';
import { useState } from 'react';
import ReceiverInput from '@/components/ReceiverInput';

const modalOverlay = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.4)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const modalContainer = css({
  background: '#fff',
  borderRadius: '16px',
  width: '600px',
  maxWidth: '95vw',
  minHeight: '800px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  position: 'relative',
});

const modalHeader = css({
  padding: `${spacing.spacing5} ${spacing.spacing6} ${spacing.spacing2}`,
  ...typography.body1Bold,
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
});

const modalDesc = css({
  color: colors.gray400,
  fontSize: '13px',
  margin: `${spacing.spacing1} 0 0 0`,
  lineHeight: 1.5,
});

const addButton = css({
  margin: `${spacing.spacing4} 0 0 0`,
  padding: `${spacing.spacing2} ${spacing.spacing4}`,
  background: colors.gray100,
  border: 'none',
  borderRadius: '8px',
  color: colors.gray700,
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '14px',
});

const modalFooter = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${spacing.spacing4} ${spacing.spacing6}`,
  position: 'absolute',
  bottom: 0,
  width: '100%',
});

const cancelBtn = css({
  background: colors.gray100,
  color: colors.gray500,
  border: 'none',
  borderRadius: '8px',
  padding: `${spacing.spacing4} 0`,
  width: '120px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
});

const completeBtn = css({
  background: colors.kakaoYellow,
  color: colors.gray900,
  border: 'none',
  borderRadius: '8px',
  padding: `${spacing.spacing4} 0`,
  width: 'calc(100% - 140px)',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  marginLeft: spacing.spacing3,
});

const receiverListWrapper = css({
  height: '520px',
  overflowY: 'auto',
  marginTop: '24px',
  marginBottom: '24px',
});

interface Receiver {
  receiverName: string;
  phoneNumber: string;
  quantity: number;
}

interface ReceiverModalProps {
  receivers: Receiver[];
  setReceivers: React.Dispatch<React.SetStateAction<Receiver[]>>;
  onClose: () => void;
}

function ReceiverModal({ receivers, setReceivers, onClose }: ReceiverModalProps) {
  const [localReceivers, setLocalReceivers] = useState<Receiver[]>(receivers);

  const handleAdd = () => {
    if (localReceivers.length < 10) {
      setLocalReceivers([...localReceivers, { receiverName: '', phoneNumber: '', quantity: 1 }]);
    }
  };

  const handleComplete = () => {
    setReceivers(localReceivers.filter(r => r.receiverName && r.phoneNumber));
    onClose();
  };

  return (
    <div css={modalOverlay}>
      <div css={modalContainer}>
        <div css={modalHeader}>
          받는 사람
        </div>
        <div style={{ padding: '0 32px' }}>
          <div css={modalDesc}>
            <p>• 최대 10명까지 추가 할 수 있어요.</p>
            <p >• 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>
          </div>
          <button css={addButton} onClick={handleAdd}>추가하기</button>
          <div css={receiverListWrapper}>
            {localReceivers.map((_, idx) => (
              <ReceiverInput
                key={idx}
                idx={idx}
                receivers={localReceivers}
                setReceivers={setLocalReceivers}
              />
            ))}
          </div>
        </div>
        <div css={modalFooter}>
          <button css={cancelBtn} onClick={onClose}>취소</button>
          <button css={completeBtn} onClick={handleComplete}>{localReceivers.length}명 완료</button>
        </div>
      </div>
    </div>
  );
}

export default ReceiverModal;
