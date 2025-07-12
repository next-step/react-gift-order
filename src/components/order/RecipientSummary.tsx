import Button from '@/components/Button';
import type { FieldErrors } from 'react-hook-form';
import type { OrderFormData } from '@/schemas/orderSchema';

type Props = {
  recipients: OrderFormData['recipients'];
  errors?: FieldErrors<OrderFormData>['recipients'];
  append: (value: any) => void;
  setModalOpen: (open: boolean) => void;
  theme: any;
};

const RecipientSummary = ({ recipients, errors, setModalOpen, theme }: Props) => {
  return (
    <section
      style={{
        marginTop: 16,
        border: `1px solid ${theme.colors.semantic.borderDefault}`,
        borderRadius: 12,
        padding: 16,
        background: theme.colors.semantic.backgroundDefault,
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 12 }}>받는 사람</h3>

      {recipients.length === 0 ? (
        <p style={{ color: theme.colors.semantic.textDefault }}>
          받는 사람이 없습니다. <br />
          받는 사람을 추가해주세요.
        </p>
      ) : (
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          {recipients.map((r, index) => (
            <li key={index}>
              {r.name || ''} {r.phone || ''} {r.quantity || 1}개
            </li>
          ))}
        </ul>
      )}

      {typeof errors?.message === 'string' && (
        <p
          style={{
            color: theme.colors.semantic.statusCritical,
            marginBottom: 16,
            fontSize: 13,
          }}
        >
          {errors.message}
        </p>
      )}

      <Button
        baseColor={theme.colors.semantic.borderDisabled}
        textColor={theme.colors.semantic.textDefault}
        onClick={() => setModalOpen(true)}
      >
        {recipients.length > 0 ? '수정' : '추가'}
      </Button>
    </section>
  );
};

export default RecipientSummary;
