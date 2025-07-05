import { ORDER_TEMPLATE_DATA, type OrderTemplate } from '@assets/orderTemplateData';
import type { HasErrorProp } from '@types/hasError';
import styled from '@emotion/styled';
import { useEffect, useState, type ChangeEvent } from 'react';

interface OrderCardTemplateContainerProps {
  msg: string; // msg 필드의 현재 값
  onMsgChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; // msg 입력 변경 핸들러
  msgError?: string; // msg 필드의 에러 메시지
  setMsg: (value: string) => void; // useMsgForm에서 받아올 setMsg 함수 추가
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
const StyledOrderCardContainer = styled.div<HasErrorProp>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 10px 0px 20px 0px;
    width: 400px;
    height: 230px;
  }
  textarea {
    width: 90%;
    padding: 4px 12px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid ${({ theme, hasError }) => (hasError ? theme.palette.red600 : theme.palette.gray300)}; // 에러 스타일 추가
    &:focus {
      outline: none;
      border-color: ${({ theme, hasError }) => (hasError ? theme.palette.red600 : theme.palette.blue500)};
    }
  }
`;

const StyledOrderTemplateContainer = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.red600};
  font-size: 12px;
  margin: -15px 10px 20px 10px; // textarea와 간격 조정
`;

const OrderCardTemplateContainer = ({ msg, onMsgChange, msgError, setMsg }: OrderCardTemplateContainerProps) => {
  // 목 데이터 템플릿에서 선택된 템플릿을 저장하기 위한 state 값
  const [selectedTemplate, setSelectedTemplate] = useState<OrderTemplate>(ORDER_TEMPLATE_DATA[0]);

  // selectedTemplate
  useEffect(() => {
    //버그 해결 -> 템플릿을 사용자가 선택하는 경우에만 setMsg를 통해 템플릿의 기본 메시지로 리렌더링
    setMsg(selectedTemplate.defaultTextMessage);
  }, [selectedTemplate, setMsg]);

  return (
    <StyledOrderTemplateContainer className='background-default'>
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

      <StyledOrderCardContainer className='order-template-card' hasError={!!msgError}>
        <div className='card-image'>
          <img src={selectedTemplate.imageUrl} alt={`메시지 카드 ${selectedTemplate.id}`} loading='lazy' />
        </div>
        <textarea
          name='msg'
          className='body2Regular'
          value={msg}
          onChange={onMsgChange} // 이제 handleMsgChange가 textarea 이벤트만 받도록 명확히 함
        ></textarea>
        {msgError && <ErrorMessage>{msgError}</ErrorMessage>}
      </StyledOrderCardContainer>
    </StyledOrderTemplateContainer>
  );
};

export default OrderCardTemplateContainer;
