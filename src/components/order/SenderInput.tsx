import type { UseFormRegister } from 'react-hook-form';
import type { OrderFormData } from '@/schemas/orderSchema';

type Props = {
  register: UseFormRegister<OrderFormData>;
  error?: { message?: string };
  theme: any;
};

const SenderInput = ({ register, error, theme }: Props) => {
  return (
    <div>
      <label>보내는 사람</label>
      <input
        {...register('senderName')}
        style={{
          width: '100%',
          height: '40px',
          borderRadius: '8px',
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

export default SenderInput;
