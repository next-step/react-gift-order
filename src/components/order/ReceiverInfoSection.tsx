import { Button } from "@/components/common";
import { SelectedReceiverTable } from "@/components/order/SelectedReceiverTable";
import { SelectFriendModal } from "@/components/order/SelectFriendModal";
import { useOrderForm } from "@/contexts/order";
import { useOverlay } from "@/hooks/overlay/useOverlay";
import styled from "@emotion/styled";

const ReceiverInfoContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: `${theme.spacing2} ${theme.spacing4}`,
}));

const ReceiverInfoHeaderWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "& button": {
    borderRadius: "8px",
  },
  marginBottom: theme.spacing3,
}));

const ReceiverInfoTitle = styled.h2(({ theme }) => ({
  fontSize: `${theme.typography.title2Bold.fontSize}`,
  fontWeight: `${theme.typography.title2Bold.fontWeight}`,
  lineHeight: `${theme.typography.title2Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: theme.spacing3,
}));

const ReceiverInfoListContainer = styled.div(({ theme }) => ({
  display: "flex",
  border: `1px solid ${theme.color.gray[400]}`,
  borderRadius: "8px",
  padding: `${theme.spacing3}`,
  justifyContent: "center",
  textAlign: "center",
  margin: 0,
  whiteSpace: "pre-line",
}));

const NoReceiverDescription = styled.p(({ theme }) => ({
  fontSize: theme.typography.label2Regular.fontSize,
  fontWeight: theme.typography.label2Regular.fontWeight,
  lineHeight: theme.typography.label2Regular.lineHeight,
  color: theme.color.gray[700],
}));

export const ReceiverInfoSection = () => {
  const overlay = useOverlay();
  const { watch } = useOrderForm();

  const receivers = watch("receivers") || [];
  const hasReceivers = receivers.length > 0;

  const handleOpenModal = () => {
    overlay.open(
      ({ close }) => <SelectFriendModal onCancel={close} onComplete={close} />,
      {
        dimmed: true,
        closeOnBackdropClick: true,
      },
    );
  };

  return (
    <ReceiverInfoContainer>
      <ReceiverInfoHeaderWrapper>
        <ReceiverInfoTitle>받는 사람</ReceiverInfoTitle>
        <Button
          variant="outlined"
          size="large"
          width="60px"
          onClick={handleOpenModal}
        >
          {hasReceivers ? "수정" : "추가"}
        </Button>
      </ReceiverInfoHeaderWrapper>

      {hasReceivers ? (
        <SelectedReceiverTable />
      ) : (
        <ReceiverInfoListContainer>
          <NoReceiverDescription>
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </NoReceiverDescription>
        </ReceiverInfoListContainer>
      )}
    </ReceiverInfoContainer>
  );
};
