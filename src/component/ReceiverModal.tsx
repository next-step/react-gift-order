import { useReceiver } from '@/context/ReceiverContext';
import {
  Div100p,
  EmptyDiv12h,
  EmptyDiv16h,
  EmptyDiv24h,
  EmptyDiv8h,
  ErrorText,
  LowField,
  MiniText,
  ModalBox,
  ModalDiv,
  ScrollBox,
  SideBlankDiv,
  SimpleButton,
  SimpleForm,
  SimpleInput,
  SubText,
  SubTitle,
} from '@/styles/Common.styled';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ReceiverModal = ({ isOpen, onClose }: Props) => {
  const { setReceivers } = useReceiver();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      receiver: [{ name: '', phone: '', count: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receiver',
  });

  const onSubmit = (data: any) => {
    setReceivers(data.receiver)
    onClose(); // 완료 후 모달 닫기
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalDiv isOpen={isOpen}>
        <ModalBox>
          <div>
            <SubTitle>받는 사람</SubTitle>
            <SubText>* 최대 10명까지 추가 할 수 있어요.</SubText>
            <SubText>
              * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </SubText>
            <EmptyDiv12h />

            <SimpleButton
              type="button"
              onClick={() => append({ name: '', phone: '', count: 1 })}
            >
              추가하기
            </SimpleButton>
          </div>
          <EmptyDiv16h />
          <ScrollBox>
            {fields.map((field, i) => (
              <div key={i}>
                {i >= 1 && <hr />}
                <LowField>
                  <SubTitle>받는사람{i + 1}</SubTitle>
                  <button type="button" onClick={() => remove(i)}>
                    X
                  </button>
                </LowField>
                <LowField>
                  <MiniText>이름</MiniText>
                  <Div100p>
                    <SimpleInput
                      type="text"
                      placeholder="이름을 입력하세요."
                      {...register(`receiver.${i}.name`, {
                        required: '이름을 입력해 주세요',
                      })}
                    />
                    {errors.receiver?.[i]?.name && (
                      <ErrorText>{errors.receiver[i].name?.message}</ErrorText>
                    )}
                  </Div100p>
                </LowField>

                <EmptyDiv8h />

                <LowField>
                  <MiniText>전화번호</MiniText>
                  <Div100p>
                    <SimpleInput
                      type="text"
                      placeholder="전화번호를 입력하세요."
                      {...register(`receiver.${i}.phone`, {
                        required: '전화번호를 입력하세요',
                        pattern: {
                          value: /^[0-9]{10,11}$/,
                          message: '전화번호는 숫자 10~11자리여야 합니다.',
                        },
                      })}
                    />
                    {errors.receiver?.[i]?.phone && (
                      <ErrorText>{errors.receiver[i].phone?.message}</ErrorText>
                    )}
                  </Div100p>
                </LowField>
                <EmptyDiv8h />

                <LowField>
                  <MiniText>수량</MiniText>
                  <Div100p>
                    <SimpleInput
                      type="number"
                      min={1}
                      {...register(`receiver.${i}.count`, {
                        required: '',
                        min: {
                          value: 0,
                          message: '수량은 1개 이상이어야 합니다',
                        },
                      })}
                    />
                    {errors.receiver?.[i]?.count && (
                      <ErrorText>{errors.receiver[i].count?.message}</ErrorText>
                    )}
                  </Div100p>
                  '
                </LowField>
              </div>
            ))}
          </ScrollBox>
          <button type="button" onClick={onClose}>
            취소
          </button>
          <button type="submit">{fields.length}명 완료</button>

          <EmptyDiv8h />
          <EmptyDiv24h />
        </ModalBox>
      </ModalDiv>
    </form>
  );
};

export default ReceiverModal;
