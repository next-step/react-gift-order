import styled from '@emotion/styled';

const Frame = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Box = styled.button`
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};
  
  border-radius: ${({ theme }) => theme.spacing.spacing3};
`;

const Title = styled.h1`
  font: ${({ theme }) => theme.typography.title2Bold};
`;
const Text = styled.p`
    font: ${({ theme }) => theme.typography.label1Regular};
    color: ${({ theme }) => theme.colors.semantic.textDeafult};
`;

const RecipientInfoBox = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;

const RecipientHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  

  & > p {
    margin: 0;
    flex: 1;
    text-align: left;
  }
`;

const EmptyText = styled.p`
  color: #888;
  text-align: center;
  white-space: pre-wrap;
`;

const RecipientInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-top: 8px;
  padding-bottom: 16px;
  &:last-child {
    border-bottom: none;
    padding-bottom: 8px;
  }

  & > p {
    margin: 0;
    flex: 1;
    text-align: left;
  }
`;

interface Recipient {
  name: string;
  phone: string;
  quantity: number;
}

interface ReceiverSelectBoxProps {
  onAddClick: () => void;
  recipients: Recipient[];
}

const ReceiverSelectBox: React.FC<ReceiverSelectBoxProps> = ({ onAddClick, recipients = [] }) => {
  return (
    <Frame>
      <Header>
        <Title>받는 사람</Title>
        <Box onClick={onAddClick} style={{ cursor: 'pointer' }}>
          <Text>{recipients.length > 0 ? '수정' : '추가'}</Text>
        </Box>
      </Header>

      <RecipientInfoBox>
        {recipients.length === 0 ? (
          <EmptyText>받는사람이 없습니다. { } 받는 사람을 추가해주세요.</EmptyText>
        ) : (
          <>
            <RecipientHeader>
              <p>이름</p>
              <p>전화번호</p>
              <p>수량</p>
            </RecipientHeader>
            {recipients.map((recipient, index) => (
              <RecipientInfo key={index}>
                <p>{recipient.name}</p>
                <p>{recipient.phone}</p>
                <p>{recipient.quantity}개</p>
              </RecipientInfo>
            ))}
          </>
        )}
      </RecipientInfoBox>
    </Frame>
  );
};
export default ReceiverSelectBox;


