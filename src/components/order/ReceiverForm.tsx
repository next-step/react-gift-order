import Spacing from "@/components/Spacing";
import styled from "@emotion/styled";
import { useState } from "react";
import ReceiverModal from "./ReceiverModal";
import type { Receiver } from "@/types/order";

type ReceiverFormProps = {
  receiverList: Receiver[];
  setReceiverList: React.Dispatch<React.SetStateAction<Receiver[]>>;
};

export default function ReceiverForm({ receiverList, setReceiverList }: ReceiverFormProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ReceiverBox>
      <Spacing height="12px" />
      <ReceiverWrapper>
        <ReceiverText>받는 사람</ReceiverText>
        <AddBtn onClick={() => setModalOpen(true)}>
          {receiverList.length > 0 ? "수정" : "추가"}
        </AddBtn>
      </ReceiverWrapper>
      <Spacing height="12px" />
      {receiverList.length === 0 ? (
        <EmptyWrapper>
          <EmptyText>
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </EmptyText>
        </EmptyWrapper>
      ) : (
        <TableWrapper>
          <TableHeader>
            <HeaderText>이름</HeaderText>
            <HeaderText>전화번호</HeaderText>
            <HeaderText>수량</HeaderText>
          </TableHeader>
          <TableBody>
            {receiverList.map((r, i) => (
              <>
                <BodyText>{r.name}</BodyText>
                <BodyText>{r.phone}</BodyText>
                <BodyText>{r.quantity}</BodyText>
              </>
            ))}
          </TableBody>
        </TableWrapper>
      )}
      {isModalOpen && (
        <ReceiverModal
          initialReceivers={receiverList}
          onClose={() => setModalOpen(false)}
          onComplete={(updated) => {
            setReceiverList(updated);
            setModalOpen(false);
          }}
        />
      )}
      <Spacing height="24px" />
    </ReceiverBox>
  );
}

const ReceiverBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const ReceiverWrapper = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const ReceiverText = styled.p`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
  white-space: nowrap;
`;

const AddBtn = styled.button`
  ${({ theme }) => theme.typography.label1Regular};
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  white-space: nowrap;
`;

const EmptyWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
`;

const EmptyText = styled.p`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
`;

const TableHeader = styled.table`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`

const HeaderText = styled.p`
  ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
`;

const BodyText = styled.p`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;
