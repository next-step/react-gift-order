import {
  ReceiverAddBtn,
  ReceiverInfo,
  ReceiverTable, ReceiverWrapper,
  RecevierTitle,
  TitleButton,
} from '@/components/Order/Receiver/Receiver.style.ts';

export default function ReceiverCurrentState({ openModal, submittedRef }) {
  return (
    <ReceiverWrapper>
      <TitleButton>
        <RecevierTitle>받는 사람</RecevierTitle>
        <ReceiverAddBtn onClick={openModal}>추가</ReceiverAddBtn>
      </TitleButton>

      {submittedRef && submittedRef.length > 0 ? (
        <ReceiverTable>
          <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>수량</th>
          </tr>
          </thead>
          <tbody>
          {submittedRef.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.count}</td>
            </tr>
          ))}
          </tbody>
        </ReceiverTable>
      ) : (
        <ReceiverInfo>
          <p>받는 사람이 없습니다.</p>
          <p>받는 사람을 추가해주세요.</p>
        </ReceiverInfo>
      )}
    </ReceiverWrapper>
  )
}