import React from 'react';
import { InputField, IconButton } from '@/components';
import { useReceiverForm } from '@/hooks/useReceiverForm';
import * as S from './styles';

interface ReceiverFormProps {
  formHook: ReturnType<typeof useReceiverForm>;
}

const ReceiverForm = ({ formHook }: ReceiverFormProps) => {
  const { register, fields, remove, formState: { errors } } = formHook;

  return (
    <S.Container>
      <S.FormContent>
        {fields.map((field, index) => {
          const formFields = [
            {
              label: '이름',
              placeholder: '이름을 입력하세요.',
              registerProps: register(`receivers.${index}.name`),
              type: 'text' as const,
              error: errors.receivers?.[index]?.name?.message,
            },
            {
              label: '전화번호',
              placeholder: '전화번호를 입력하세요.',
              registerProps: register(`receivers.${index}.phone`),
              type: 'tel' as const,
              error: errors.receivers?.[index]?.phone?.message,
            },
            {
              label: '수량',
              placeholder: '수량을 입력하세요.',
              registerProps: register(`receivers.${index}.quantity`, { 
                valueAsNumber: true 
              }),
              type: 'number' as const,
              error: errors.receivers?.[index]?.quantity?.message,
            },
          ];

          return (
            <S.ReceiverCard key={field.id}>
              <S.ReceiverHeader>
                <S.ReceiverTitle>받는 사람 {index + 1}</S.ReceiverTitle>
                <IconButton onClick={() => remove(index)}>
                  ✕
                </IconButton>
              </S.ReceiverHeader>
              <S.ReceiverContent>
                {formFields.map((formField, fieldIndex) => (
                  <React.Fragment key={formField.label}>
                    <InputField
                      label={formField.label}
                      placeholder={formField.placeholder}
                      {...formField.registerProps}
                      type={formField.type}
                      labelMinWidth="3.75rem"
                      layout="horizontal"
                      error={formField.error}
                    />
                    {fieldIndex < formFields.length - 1 && <S.FormSpacer />}
                  </React.Fragment>
                ))}
              </S.ReceiverContent>
            </S.ReceiverCard>
          );
        })}
      </S.FormContent>
    </S.Container>
  );
};

export default ReceiverForm; 