import styled from '@emotion/styled';
import type { MultiOrderFormData } from '@schemas/orderSchema';
import { useFormContext, useWatch } from 'react-hook-form';

interface ReceiveListProps {
  onOpen: () => void;
}

const ReceiveList = ({ onOpen }: ReceiveListProps) => {
  const { control } = useFormContext<MultiOrderFormData>();
  const recipients = useWatch({ control, name: 'recipients' });

  return (
    <Wrapper>
      <Header>
        <Title>받는사람</Title>
        <AddEditButton type="button" onClick={onOpen}>
          {recipients?.length === 0 ? '추가' : '수정'}
        </AddEditButton>
      </Header>
      {recipients?.length === 0 ? (
        <EmptyBox>
          <EmptyText>받는 사람이 없습니다 </EmptyText>
          <EmptyText>받는 사람을 추가해주세요.</EmptyText>
        </EmptyBox>
      ) : (
        <Table>
          <TableHead>
            <tr>
              <TableCell>이름</TableCell>
              <TableCell>전화번호</TableCell>
              <TableCell>수량</TableCell>
            </tr>
          </TableHead>
          <TableBody>
            {recipients.map((item, index) => (
              <TalbleRow key={index}>
                <TableCell>{item.receiver}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TalbleRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Wrapper>
  );
};

export default ReceiveList;

const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing5,
  padding: `0 ${theme.spacing.spacing7}`,
}));

const Header = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing.spacing4,
}));

const Title = styled.div(({ theme }) => ({
  ...theme.typography.label1Bold,
  marginBottom: theme.spacing.spacing3,
}));

const AddEditButton = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.gray.gray300,
  border: 'none',
  borderRadius: theme.spacing.spacing2,
  padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
  margin: `${theme.spacing.spacing3} 0`,
  cursor: 'pointer',

  '&:active': {
    backgroundColor: theme.colors.gray.gray400,
  },
}));

const EmptyBox = styled.div(({ theme }) => ({
  padding: theme.spacing.spacing7,
  backgroundColor: theme.colors.semantic.backgroundDefault,
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  borderRadius: theme.spacing.spacing2,
  textAlign: 'center',
}));

const EmptyText = styled.p(({ theme }) => ({
  ...theme.typography.body1Regular,
  color: theme.colors.semantic.textSub,
}));

const Table = styled.table(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.gray.gray100,
  borderRadius: theme.spacing.spacing2,
  borderCollapse: 'collapse',
  overflow: 'hidden',
  border: `1px solid ${theme.colors.semantic.borderDefault} !important`,
}));

const TableHead = styled.thead(({ theme }) => ({
  backgroundColor: theme.colors.gray.gray200,
  color: theme.colors.semantic.textDefault,
  textAlign: 'left',
  ...theme.typography.label1Bold,
}));

const TableBody = styled.tbody(({ theme }) => ({
  backgroundColor: theme.colors.gray.gray00,
  color: theme.colors.semantic.textDefault,
  textAlign: 'left',
  ...theme.typography.body1Regular,
}));

const TalbleRow = styled.tr(({ theme }) => ({
  '&:not(:last-of-type)': {
    borderBottom: `1px solid ${theme.colors.semantic.borderDefault}`,
  },
}));

const TableCell = styled.td(({ theme }) => ({
  padding: theme.spacing.spacing4,
  ...theme.typography.body2Regular,
  color: theme.colors.semantic.textDefault,
}));
