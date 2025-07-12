import type { UseFormRegister } from 'react-hook-form';
import type { OrderFormData } from '@/schemas/orderSchema';

type Props = {
  register: UseFormRegister<OrderFormData>;
  error?: { message?: string };
  theme: any;
};

const MessageInput = ({ register, error, theme }: Props) => {
  return (
    <div style={{ margin: '12px 0' }}>
      <label>메시지</label>
      <textarea
        {...register('message')}
        rows={3}
        style={{
          width: '100%',
          height: '60px',
          borderRadius: '8px',
          padding: '5px',
          border: `1px solid ${theme.colors.semantic.borderDefault}`,
          backgroundColor: theme.colors.semantic.backgroundDefault,
          color: theme.colors.semantic.textDefault,
        }}
      />
      {error && (
        <p style={{ color: theme.colors.semantic.statusCritical }}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default MessageInput;
