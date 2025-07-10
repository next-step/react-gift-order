import InputOrder from '@/common/InputOrder';
import useOrderForm from '@/hooks/useOrderForm';
import styled from '@emotion/styled';

type OrderFormField = Pick<
  ReturnType<typeof useOrderForm>,
  'value' | 'onChange' | 'error'
>;

type ReceiverInfoSectionProps = {
  receiverName: OrderFormField;
  receiverPhone: OrderFormField;
  quantity: OrderFormField;
};

const ReceiverInfoSection = ({
  receiverName,
  receiverPhone,
  quantity,
}: ReceiverInfoSectionProps) => {
  return (
    <Section>
      <RecipientHeaderContainer>
        <Title>받는 사람</Title>
        <AddBtn>추가</AddBtn>
      </RecipientHeaderContainer>
      <RecipientListContainer>
        받는 사람이 없습니다. <br />
        받는 사람을 추가해주세요.
      </RecipientListContainer>
    </Section>
  );
};

export default ReceiverInfoSection;

const Section = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const RecipientHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const AddBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  padding: ${({ theme }) => theme.spacing.spacing2}
    ${({ theme }) => theme.spacing.spacing4}
    ${({ theme }) => theme.spacing.spacing2}
    ${({ theme }) => theme.spacing.spacing4};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  border: 0px;
`;

const RecipientListContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius:  ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing7}; 0;
  text-align: center;
  color:${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  line-height: ${({ theme }) => theme.spacing.spacing6};
`;
