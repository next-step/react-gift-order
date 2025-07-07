import { ORDER_TEMPLATE_DATA, type OrderTemplate } from '@assets/orderTemplateData';
//'@types/hasError' 이부분에 vsc가 빨간줄로 Cannot import type declaration files. Consider importing 'hasError' instead of '@types/hasError'.ts(6137)
//라는 오류문을 보여주는데 혹시 해결하는 방법을 알 수 있을까요?
// 해결 -> @types라는 경로는 node_modules에 있는 @types를 가져오려고 하기 때문에 오류가 발생
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import type { OrderFormValue } from '@/types/OrderFormValues';

interface OrderCardTemplateContainerProps {
  register: UseFormRegister<OrderFormValue>;
  errors: FieldErrors<OrderFormValue>;
  setValue: UseFormSetValue<OrderFormValue>;
}

const StyledOrderCardSideScrollConntainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 4px;

  img {
    width: 80px;
    height: 50px;
    margin: 3px;
    border: 3px solid transparent;
    border-radius: 10px;
    cursor: pointer; // 클릭 가능하게
    &.selected {
      border-color: ${({ theme }) => theme.palette.blue500}; // 선택된 템플릿 테두리
    }
  }
  .first-card {
    margin-left: 4px;
  }
`;
const StyledOrderCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 10px 0px 20px 0px;
    width: 400px;
    height: 230px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  p {
    margin-top: 6px;
    width: 95%;
  }
  textarea {
    width: 95%;
    padding: 4px 12px;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
`;

const StyledOrderTemplateContainer = styled.div`
  width: 100%;
`;

const OrderCardTemplateContainer = ({
  register,
  errors,
  setValue,
}: OrderCardTemplateContainerProps) => {
  // 목 데이터 템플릿에서 선택된 템플릿을 저장하기 위한 state 값
  const [selectedTemplate, setSelectedTemplate] = useState<OrderTemplate>(ORDER_TEMPLATE_DATA[0]);

  //템플릿을 선택했을때 기본 messgae를 만들어 리렌더링하기 위한 useEffect()
  useEffect(() => {
    setValue('msg', selectedTemplate.defaultTextMessage, { shouldValidate: true });
  }, [selectedTemplate, setValue]);

  return (
    <StyledOrderTemplateContainer className='background-default margin-bottom-10'>
      <StyledOrderCardSideScrollConntainer>
        {ORDER_TEMPLATE_DATA.map((template: OrderTemplate, index: number) => (
          <img
            key={template.id}
            src={template.thumbUrl}
            alt={`템플릿 ${template.id} 썸네일`}
            className={`${selectedTemplate.id === template.id ? 'selected' : ''} ${index === 0 ? 'first-card' : ''}`}
            onClick={() => setSelectedTemplate(template)}
          />
        ))}
      </StyledOrderCardSideScrollConntainer>

      <StyledOrderCardContainer className='order-template-card'>
        <div className='card-image'>
          <img
            src={selectedTemplate.imageUrl}
            alt={`메시지 카드 ${selectedTemplate.id}`}
            loading='lazy'
          />
        </div>
        <div>
          <textarea
            {...register('msg', { required: '메시지는 필수입니다.' })}
            className={`body2Regular ${errors.msg ? 'border-red' : ''}`}
            placeholder='메시지를 입력해주세요'
          ></textarea>
          {errors.msg && (
            <p className='label2Regular font-red margin-left-20'>
              {errors.msg.message?.toString()}
            </p>
          )}
        </div>
      </StyledOrderCardContainer>
    </StyledOrderTemplateContainer>
  );
};

export default OrderCardTemplateContainer;
