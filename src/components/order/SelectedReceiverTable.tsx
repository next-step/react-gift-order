import { useOrderForm } from "@/contexts/order";
import styled from "@emotion/styled";

const ReceiverTable = styled.table(({ theme }) => ({
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: 0,
  border: `1px solid ${theme.color.gray[200]}`,
  borderRadius: "8px",
  overflow: "hidden",
  textAlign: "center",
}));

const ReceiverTableHeader = styled.thead(({ theme }) => ({
  backgroundColor: theme.color.gray[300],
}));

const ReceiverTableBody = styled.tbody({});

const ReceiverTableRow = styled.tr(({ theme }) => ({
  "&:not(:last-of-type)": {
    borderBottom: `1px solid ${theme.color.gray[200]}`,
  },
}));

const ReceiverTableHeaderCell = styled.th(({ theme }) => ({
  padding: `${theme.spacing2} ${theme.spacing4}`,
  fontSize: theme.typography.body2Regular.fontSize,
  fontWeight: theme.typography.body2Regular.fontWeight,
  lineHeight: theme.typography.body2Regular.lineHeight,
  color: theme.color.gray[900],
  borderRight: `1px solid ${theme.color.gray[200]}`,
  borderBottom: `1px solid ${theme.color.gray[200]}`,
  "&:last-of-type": {
    borderRight: "none",
  },
}));

const ReceiverTableCell = styled.td(({ theme }) => ({
  padding: `${theme.spacing2} ${theme.spacing3}`,
  fontSize: theme.typography.label1Regular.fontSize,
  fontWeight: theme.typography.label1Regular.fontWeight,
  lineHeight: theme.typography.label1Regular.lineHeight,
  color: theme.color.gray[900],
  borderRight: `1px solid ${theme.color.gray[200]}`,
  borderBottom: `1px solid ${theme.color.gray[200]}`,
  "&:last-child": {
    borderRight: "none",
  },
}));

export const SelectedReceiverTable = () => {
  const { watch } = useOrderForm();
  const receivers = watch("receivers");

  if (receivers?.length === 0) return null;

  return (
    <ReceiverTable>
      <ReceiverTableHeader>
        <ReceiverTableRow>
          <ReceiverTableHeaderCell>이름</ReceiverTableHeaderCell>
          <ReceiverTableHeaderCell>전화번호</ReceiverTableHeaderCell>
          <ReceiverTableHeaderCell>수량</ReceiverTableHeaderCell>
        </ReceiverTableRow>
      </ReceiverTableHeader>
      <ReceiverTableBody>
        {receivers?.map(receiver => (
          <ReceiverTableRow
            key={`${receiver.receiverName}-${receiver.receiverPhone}`}
          >
            <ReceiverTableCell>{receiver.receiverName}</ReceiverTableCell>
            <ReceiverTableCell>{receiver.receiverPhone}</ReceiverTableCell>
            <ReceiverTableCell>{receiver.quantity}</ReceiverTableCell>
          </ReceiverTableRow>
        ))}
      </ReceiverTableBody>
    </ReceiverTable>
  );
};
