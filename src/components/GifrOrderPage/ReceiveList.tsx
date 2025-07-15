import styled from '@emotion/styled';

interface Recipient {
  receiver: string;
  phone: string;
  quantity: number;
}

const mockData: Recipient[] = [
  { receiver: '홍길동', phone: '010-1234-5678', quantity: 2 },
  { receiver: '김철수', phone: '010-8765-4321', quantity: 1 },
];

interface ReceiveListProps {
  onOpen: () => void;
}

const ReceiveList = ({ onOpen }: ReceiveListProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>받는사람</Title>
        <AddEditButton onClick={onOpen}>추가</AddEditButton>
      </Header>

      <Table>
        <TableHead>
          <tr>
            <TableCell>이름</TableCell>
            <TableCell>전화번호</TableCell>
            <TableCell>수량</TableCell>
          </tr>
        </TableHead>
        <TableBody>
          {mockData.map((item, index) => (
            <TalbleRow key={index}>
              <TableCell>{item.receiver}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.quantity}</TableCell>
            </TalbleRow>
          ))}
        </TableBody>
      </Table>
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
