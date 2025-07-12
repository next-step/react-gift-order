import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import RecipientForm from '@src/components/RecipientForm';
import { orderSchema } from '@src/hooks/useOrderForm';
import type { OrderValues } from '@src/hooks/useOrderForm';
import theme from '@/styles/tokens';

const DUPLICATE_PHONE_ERROR_MESSAGE = '중복된 전화번호가 있습니다.';

const initialValues: OrderValues = {
  recipientName: '',
  recipientPhone: '',
  quantity: '1',
};

const coverStyle = css`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  transition:
    opacity 300ms,
    visibility 300ms;
  padding: 16px;
`;

const insideStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalStyle = css`
  background: ${theme.colors.backgroundDefault};
  border-radius: 8px;
  max-height: calc(-7.5rem + 100vh);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const modalNoticeStyle = css`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

const pTitle = css`
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;

const noticeP = css`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  color: ${theme.colors.gray800};
  margin: 0px;
  text-align: left;
`;

const addButtonStyle = css`
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${theme.colors.gray300};
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
`;

const contentDiv = css`
  flex: 1 1 0%;
  overflow: auto;
`;

const buttonList = css`
  display: flex;
  gap: 12px;
`;

const cancelButton = css`
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${theme.colors.gray300};
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  width: 100%;
  flex: 1 1 0%;
`;

const register = css`
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${theme.colors.yellow600};
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  flex: 3 1 0%;
`;

const spacer4 = css`
  height: ${theme.spacing.spacing1};
`;

const spacer8 = css`
  height: ${theme.spacing.spacing2};
`;

type Touched = {
  [K in keyof OrderValues]?: boolean;
};
type TouchedList = Touched[];

interface RecipientFormListProps {
  open: boolean;
  onClose: () => void;
  recipients: OrderValues[];
  setRecipients: (recipients: OrderValues[]) => void;
}

const RecipientFormList = ({
  open,
  onClose,
  recipients,
  setRecipients,
}: RecipientFormListProps) => {
  const [localRecipients, setLocalRecipients] =
    useState<OrderValues[]>(recipients);
  const [errors, setErrors] = useState<Partial<OrderValues>[]>([{}]);
  const [touched, setTouched] = useState<TouchedList>([{}]);

  useEffect(() => {
    if (open) {
      setLocalRecipients(recipients);
      setErrors(recipients.map(() => ({})));
      setTouched(recipients.map(() => ({})));
    }
  }, [open, recipients]);

  const onChange = (idx: number, name: keyof OrderValues, value: string) => {
    const newRecipients = localRecipients.map((item, i) =>
      i === idx ? { ...item, [name]: value } : item
    );
    setLocalRecipients(newRecipients);

    let errorMsg: string | undefined;
    const fieldSchema = orderSchema.shape[name];

    try {
      fieldSchema.parse(value);
    } catch (e: any) {
      errorMsg = e?.errors?.[0]?.message;
    }

    if (name === 'recipientPhone') {
      const phoneCount = newRecipients.filter(
        (r) => r.recipientPhone === value
      ).length;
      if (value && phoneCount > 1) {
        errorMsg = '중복된 전화번호가 있습니다.';
      }
    }

    const newErrors = errors.map((item, i) =>
      i === idx ? { ...item, [name]: errorMsg } : item
    );
    setErrors(newErrors);
  };

  const onBlur = (idx: number, name: keyof OrderValues) => {
    const newTouched = touched.map((item, i) =>
      i === idx ? { ...item, [name]: true } : item
    );
    setTouched(newTouched);
  };

  const handleAdd = () => {
    if (localRecipients.length >= 10) return;
    setLocalRecipients([...localRecipients, { ...initialValues }]);
    setErrors([...errors, {}]);
    setTouched([...touched, {}]);
  };

  const handleRemove = (idx: number) => {
    setLocalRecipients(localRecipients.filter((_, i) => i !== idx));
    setErrors(errors.filter((_, i) => i !== idx));
    setTouched(touched.filter((_, i) => i !== idx));
  };

  const handleSubmit = () => {
    const phoneMap: Record<string, number> = {};
    localRecipients.forEach((r) => {
      if (r.recipientPhone) {
        phoneMap[r.recipientPhone] = (phoneMap[r.recipientPhone] || 0) + 1;
      }
    });

    const newErrors: Partial<OrderValues>[] = localRecipients.map(
      (recipient) => {
        const err: Partial<OrderValues> = {};

        Object.keys(recipient).forEach((key) => {
          const field = key as keyof OrderValues;
          let value = recipient[field];

          try {
            const fieldSchema = orderSchema.shape[field];
            fieldSchema.parse(value);
          } catch (e: any) {
            if (e?.issues && e.issues.length > 0) {
              err[field] = e.issues[0].message;
            } else if (e.message) {
              err[field] = e.message;
            } else {
              err[field] = '유효성 검사 오류';
            }
          }
        });

        if (
          recipient.recipientPhone &&
          phoneMap[recipient.recipientPhone] > 1
        ) {
          err.recipientPhone = DUPLICATE_PHONE_ERROR_MESSAGE;
        }

        return err;
      }
    );

    setErrors(newErrors);

    const newTouched = localRecipients.map((recipient) => {
      const touchedFields: Touched = {};
      Object.keys(recipient).forEach((key) => {
        touchedFields[key as keyof OrderValues] = true;
      });
      return touchedFields;
    });
    setTouched(newTouched);

    const hasError = newErrors.some((err) => Object.values(err).some(Boolean));

    if (hasError) {
      return;
    }

    setRecipients(localRecipients);
    onClose();
  };

  if (!open) return null;

  return (
    <div css={coverStyle}>
      <div css={insideStyle}>
        <div css={modalStyle}>
          <div css={modalNoticeStyle}>
            <p css={pTitle}>받는 사람</p>
            <div css={spacer4} />
            <p css={noticeP}>
              * 최대 10명까지 추가 할 수 있어요.
              <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </p>
            <div css={spacer8} />
            <button
              css={addButtonStyle}
              onClick={handleAdd}
              disabled={localRecipients.length >= 10}
            >
              추가하기
            </button>
          </div>

          <div css={contentDiv}>
            {localRecipients.map((values, idx) => (
              <RecipientForm
                key={idx}
                values={values}
                errors={touched[idx] ? errors[idx] : {}}
                onChange={(name, value) => onChange(idx, name, value)}
                onBlur={(name) => onBlur(idx, name)}
                onRemove={() => handleRemove(idx)}
                index={idx}
              />
            ))}
          </div>

          <div css={buttonList}>
            <button css={cancelButton} onClick={onClose}>
              취소
            </button>
            <button css={register} onClick={handleSubmit}>
              {localRecipients.length}명 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientFormList;
