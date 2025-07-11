import { useState } from 'react';
import {
  RecieverContainer,
  RecieverTitle,
  RecieverTable,
  RecieverThead,
  RecieverTh,
  RecieverTd,
  RecieverAddBtn,
  RecieverHeader,
  RecieverEmpty,
  RecieverEmptyText,
} from '@/styles/Order/Reciever.styles';
import RecieverModal from './RecieverModal';
import type { RecieverType } from '@/pages/Order/Order';

type RecieverProps = {
  recievers: RecieverType[];
  onUpdate: (newList: RecieverType[]) => void;
};

function Reciever({ recievers, onUpdate }: RecieverProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <RecieverContainer>
      <RecieverHeader>
        <RecieverTitle>받는 사람</RecieverTitle>
        <RecieverAddBtn type="button" onClick={() => setModalOpen(true)}>
          {recievers.length === 0 ? '추가' : '수정'}
        </RecieverAddBtn>
      </RecieverHeader>
      {recievers.length === 0 ? (
        <RecieverEmpty>
          <RecieverEmptyText>받는 사람이 없습니다.</RecieverEmptyText>
          <RecieverEmptyText>받는 사람을 추가해주세요.</RecieverEmptyText>
        </RecieverEmpty>
      ) : (
        <RecieverTable>
          <RecieverThead>
            <tr>
              <RecieverTh>이름</RecieverTh>
              <RecieverTh>전화번호</RecieverTh>
              <RecieverTh>수량</RecieverTh>
            </tr>
          </RecieverThead>
          <tbody>
            {recievers.map((r, idx) => (
              <tr key={idx}>
                <RecieverTd>{r.name}</RecieverTd>
                <RecieverTd>{r.phone}</RecieverTd>
                <RecieverTd>{r.count}</RecieverTd>
              </tr>
            ))}
          </tbody>
        </RecieverTable>
      )}
      <RecieverModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onComplete={(list) => {
          onUpdate(list);
          setModalOpen(false);
        }}
        initialList={recievers}
      />
    </RecieverContainer>
  );
}

export default Reciever;
