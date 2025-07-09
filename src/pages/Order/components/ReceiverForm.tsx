/** @jsxImportSource @emotion/react */
import type { Receiver, ReceiverError } from '../hooks/useReceivers';
import { horizontalFormStyle, receiverLabelStyle, errorInputStyle, errorMessageStyle } from '../styles/OrderPage.style';

type Props = {
  receiver: Receiver;
  error: ReceiverError;
  index: number;
  onChange: (index: number, field: keyof Receiver, value: string) => void;
  onRemove: () => void;
};

const ReceiverForm = ({ receiver, error, index, onChange, onRemove }: Props) => {
  return (
    <div css={{ marginTop: '20px' }}>
      <h4 css={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        받는 사람 {index + 1}
        <button
          type="button"
          onClick={onRemove}
          css={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px' }}
        >
          X
        </button>
      </h4>

      {(['name', 'phone', 'quantity'] as const).map((field) => (
        <div key={field} css={horizontalFormStyle}>
          <label css={receiverLabelStyle}>{field === 'name' ? '이름' : field === 'phone' ? '전화번호' : '수량'}</label>
          <div style={{ flex: 1 }}>
            <input
              type={field === 'quantity' ? 'number' : 'text'}
              min={field === 'quantity' ? 1 : undefined}
              placeholder={
                field === 'name' ? '이름을 입력하세요' : field === 'phone' ? '전화번호를 입력하세요' : ''
              }
              value={receiver[field]}
              onChange={(e) => onChange(index, field, e.target.value)}
              css={error[field] ? errorInputStyle : undefined}
            />
            {error[field] && <p css={errorMessageStyle}>{error[field]}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReceiverForm;
