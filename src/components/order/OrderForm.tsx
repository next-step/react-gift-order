/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useOrderForm } from "@/components/order/useOrderForm";

export const OrderForm = () => {
  const theme = useTheme();
  const { form, setField, errors } = useOrderForm();

  return (
    <form css={formContainer(theme)}>
      <div css={fieldContainer}>
        <label htmlFor="message">메시지</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          placeholder="축하 메시지를 입력해주세요"
          css={inputStyle(theme)}
        />
        {errors.message && <p css={errorText(theme)}>{errors.message}</p>}
      </div>

      <div css={fieldContainer}>
        <label htmlFor="senderName">보내는 사람</label>
        <input
          id="senderName"
          type="text"
          value={form.senderName}
          onChange={(e) => setField("senderName", e.target.value)}
          placeholder="이름을 입력해주세요"
          css={inputStyle(theme)}
        />
        {errors.senderName && <p css={errorText(theme)}>{errors.senderName}</p>}
      </div>

      <div css={fieldContainer}>
        <label htmlFor="receiverName">받는 사람</label>
        <input
          id="receiverName"
          type="text"
          value={form.receiverName}
          onChange={(e) => setField("receiverName", e.target.value)}
          placeholder="이름을 입력해주세요"
          css={inputStyle(theme)}
        />
        {errors.receiverName && <p css={errorText(theme)}>{errors.receiverName}</p>}
      </div>

      <div css={fieldContainer}>
        <label htmlFor="receiverPhone">전화번호</label>
        <input
          id="receiverPhone"
          type="tel"
          value={form.receiverPhone}
          onChange={(e) => setField("receiverPhone", e.target.value)}
          placeholder="01012345678"
          css={inputStyle(theme)}
        />
        {errors.receiverPhone && <p css={errorText(theme)}>{errors.receiverPhone}</p>}
      </div>

      <div css={fieldContainer}>
        <label htmlFor="quantity">수량</label>
        <input
          id="quantity"
          type="number"
          value={form.quantity}
          min={1}
          onChange={(e) => setField("quantity", Number(e.target.value))}
          css={inputStyle(theme)}
        />
        {errors.quantity && <p css={errorText(theme)}>{errors.quantity}</p>}
      </div>
    </form>
  );
};

const formContainer = (theme: any) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
  margin-bottom: ${theme.spacing.spacing4};
`;

const fieldContainer = css`
  display: flex;
  flex-direction: column;
`;

const inputStyle = (theme: any) => css`
  padding: ${theme.spacing.spacing2};
  border: 1px solid ${theme.colors.gray300};
  border-radius: 8px;
  font-size: 16px;
  margin-top: 4px;
`;

const errorText = (theme: any) => css`
  color: ${theme.colors.red500};
  font-size: 13px;
  margin-top: 4px;
`;
