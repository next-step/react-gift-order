import { ORDER_TEMPLATE_DATA, type OrderTemplate } from '@assets/orderTemplateData';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { OrderFormValue } from '@/types/OrderFormValues';

// interface OrderCardTemplateContainerProps {
//   register: UseFormRegister<OrderFormValue>;
//   errors: FieldErrors<OrderFormValue>;
//   setValue: UseFormSetValue<OrderFormValue>;
// }

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

const OrderCardTemplateContainer = () => {
  // 목 데이터 템플릿에서 선택된 템플릿을 저장하기 위한 state 값
  const [selectedTemplate, setSelectedTemplate] = useState<OrderTemplate>(ORDER_TEMPLATE_DATA[0]);
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<OrderFormValue>();

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
            {...register('msg')}
            className={`body2Regular ${errors.msg ? 'border-red' : ''}`}
            placeholder='메시지를 입력해주세요'
          />
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
