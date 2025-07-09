/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import {
  receiverAddGuideStyle,
} from '../styles/OrderPage.style';
import ReceiverForm from './ReceiverForm';
import { useReceivers } from '../hooks/useReceivers';

type Props = {
  onClose: () => void;
  onComplete: (receivers: { name: string; phone: string; quantity: number }[]) => void;
  initialReceivers: { name: string; phone: string; quantity: number }[];
};

const AddReceiverModal = ({ onClose, onComplete, initialReceivers }: Props) => {
  const theme = useTheme();

  const {
    receivers,
    errors,
    addReceiver,
    removeReceiver,
    updateReceiver,
    validateAll,
  } = useReceivers(initialReceivers);

  const handleComplete = () => {
    if (validateAll()) {
      onComplete(receivers);
    }
  };

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        css={{
          backgroundColor: '#fff',
          width: '550px',
          height: '600px',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >

        <div css={{ padding: '24px', flexShrink: 0, borderBottom: '1px solid #eee' }}>
          <h3 css={{ margin: 0 }}>받는 사람</h3>
          <p css={receiverAddGuideStyle(theme)}>* 최대 10명까지 추가 할 수 있어요.</p>
          <p css={receiverAddGuideStyle(theme)}>
            * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </p>
          <button
            type="button"
            onClick={addReceiver}
            disabled={receivers.length >= 10}
            css={{
              backgroundColor:
                receivers.length >= 10 ? theme.color.gray.gray100 : theme.color.gray.gray300,
              color: theme.color.gray.gray1000,
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: receivers.length >= 10 ? 'not-allowed' : 'pointer',
              marginTop: '12px',
            }}
          >
            추가하기
          </button>
        </div>

        <div css={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
          {receivers.map((r, i) => (
            <ReceiverForm
              key={i}
              receiver={r}
              error={errors[i]}
              index={i}
              onChange={updateReceiver}
              onRemove={() => removeReceiver(i)}
            />
          ))}
        </div>

        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderTop: '1px solid #eee',
            backgroundColor: '#fff',
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            css={{
              padding: '12px 24px',
              borderRadius: '8px',
              backgroundColor: theme.color.gray.gray200,
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              flex: 1,
              marginRight: 8,
            }}
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleComplete}
            css={{
              padding: '12px 24px',
              borderRadius: '8px',
              backgroundColor: '#f9e000',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              flex: 2,
            }}
          >
            {receivers.length}명 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReceiverModal;
