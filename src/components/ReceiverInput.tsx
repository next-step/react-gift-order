import { css } from '@emotion/react';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';
import { useFormContext, Controller } from 'react-hook-form';

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

// 에러 메시지 스타일
const errorMessage = css({
  color: colors.red600,
  fontSize: '14px',
  marginTop: '-16px',
  marginBottom: spacing.spacing4,
});

interface Receiver {
  receiverName: string;
  phoneNumber: string;
  quantity: number;
}
interface FormValues {
  receivers: Receiver[];
}

function ReceiverInput({ idx, remove, isPhoneDuplicate }: {
  idx: number;
  remove: (index: number) => void;
  isPhoneDuplicate: (value: string, idx: number) => boolean;
}) {
  const { control, formState: { errors } } = useFormContext<FormValues>();
  const receiverErrors = errors.receivers?.[idx];
  return (
    <div css={wrapper}>
      <div>
        받는 사람 {idx + 1}
        <button
          css={deleteButton}
          type="button"
          onClick={() => remove(idx)}
        >
          &times;
        </button>
      </div>
      <div css={inputContainer}>
        <div css={inputLabel}>이름</div>
        <Controller
          control={control}
          name={`receivers.${idx}.receiverName`}
          rules={{ required: '이름을 입력하세요.' }}
          render={({ field }) => (
            <input css={inputField} type="text" placeholder="이름을 입력하세요." {...field} />
          )}
        />
      </div>
      {receiverErrors?.receiverName && (
        <div css={errorMessage}>{receiverErrors.receiverName.message}</div>
      )}
      <div css={inputContainer}>
        <div css={inputLabel}>전화번호</div>
        <Controller
          control={control}
          name={`receivers.${idx}.phoneNumber`}
          rules={{
            required: '전화번호를 입력하세요.',
            pattern: { value: /^010\d{8}$/, message: '01012341234 형식만 허용' },
            validate: value => isPhoneDuplicate(value, idx) || '전화번호가 중복됩니다.'
          }}
          render={({ field }) => (
            <input css={inputField} type="text" placeholder="전화번호를 입력하세요." {...field} />
          )}
        />
      </div>
      {receiverErrors?.phoneNumber && (
        <div css={errorMessage}>{receiverErrors.phoneNumber.message}</div>
      )}
      <div css={inputContainer}>
        <div css={inputLabel}>수량</div>
        <Controller
          control={control}
          name={`receivers.${idx}.quantity`}
          rules={{
            required: '수량을 입력하세요.',
            min: { value: 1, message: '최소 1개 이상' }
          }}
          render={({ field }) => (
            <input css={quantityInput} type="number" min={1} {...field} />
          )}
        />
      </div>
      {receiverErrors?.quantity && (
        <div css={errorMessage}>{receiverErrors.quantity.message}</div>
      )}
    </div>
  );
}

export default ReceiverInput;