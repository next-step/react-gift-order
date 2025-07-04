import { ORDER_TEMPLATE_DATA, type OrderTemplate } from '@/assets/orderTemplateData';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

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
  textarea {
    width: 90%;
    padding: 4px 12px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
`;

const StyledOrderTemplateContainer = styled.div`
  width: 100%;
`;
const OrderCardTemplateContainer = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<OrderTemplate>(ORDER_TEMPLATE_DATA[0]);
  const [textareaMessage, setTextareaMessage] = useState<string>(selectedTemplate.defaultTextMessage);

  useEffect(() => {
    setTextareaMessage(selectedTemplate.defaultTextMessage);
  }, [selectedTemplate]); // selectedTemplate가 의존성 배열에 포함되어 변경 시마다 실행

  // textarea 내용이 변경될 때 호출될 핸들러
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaMessage(e.target.value);
  };

  return (
    <StyledOrderTemplateContainer className='background-default'>
      <StyledOrderCardSideScrollConntainer>
        {ORDER_TEMPLATE_DATA.map((template: OrderTemplate, index: number) => (
          <img
            key={template.id}
            src={template.thumbUrl}
            alt={`템플릿 ${template.id} 썸네일`}
            className={`${selectedTemplate.id === template.id ? 'selected' : ''} ${index == 0 ? 'first-card' : ''}`} // 선택된 썸네일에 'selected' 클래스 추가
            onClick={() => setSelectedTemplate(template)} // 클릭 시 메인 카드 내용 변경
          />
        ))}
      </StyledOrderCardSideScrollConntainer>

      {/* 선택된 카드 이미지 컨테이너*/}
      <StyledOrderCardContainer className='order-template-card'>
        <div className='card-image'>
          <img
            src={selectedTemplate.imageUrl} // imageUrl
            alt={`메시지 카드 ${selectedTemplate.id}`}
          />
        </div>
        <textarea
          className='body2Regular'
          value={textareaMessage} // defaultTextMessage
          onChange={handleTextareaChange}
        ></textarea>
      </StyledOrderCardContainer>
    </StyledOrderTemplateContainer>
  );
};

export default OrderCardTemplateContainer;
