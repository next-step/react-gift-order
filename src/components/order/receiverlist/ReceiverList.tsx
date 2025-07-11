import { SideFlex, SidePadding } from '@/components/common/SidePadding';
import { GrayBtn } from '../../common/Buttons';
import { Padding3 } from '@/components/common/Padding';
import { Title } from '@/components/common/Input';
import { List, ListBody, ListHeader, ListText, ListWrapper } from './ReceiverList.styles';
import { GrayNoticeSm } from './../../common/GrayNotice';
import type { OrderFormData } from './types';

interface ReceiverListProps {
  setIsVisible: (visible: boolean) => void;
  receivers: OrderFormData['receivers'];
}
const ReceiverList = ({ setIsVisible, receivers }: ReceiverListProps) => {
  console.log(receivers);
  return (
    <SidePadding>
      <Padding3 />
      <SideFlex>
        <Title>받는 사람</Title>
        <GrayBtn onClick={() => setIsVisible(true)}>추가</GrayBtn>
      </SideFlex>
      <Padding3 />

      {receivers.length !== 0 ? (
        <List>
          <ListHeader>
            <ListText>이름</ListText>
            <ListText>전화번호</ListText>
            <ListText>수량</ListText>
          </ListHeader>

          {receivers.map((receiver) => (
            <ListBody>
              <ListText>{receiver.name}</ListText>
              <ListText>{receiver.phone}</ListText>
              <ListText>{receiver.quantity}</ListText>
            </ListBody>
          ))}
        </List>
      ) : (
        <ListWrapper>
          <GrayNoticeSm>
            받는 사람이 없습니다.
            <br /> 받는 사람을 추가해주세요.
          </GrayNoticeSm>
        </ListWrapper>
      )}
    </SidePadding>
  );
};

export default ReceiverList;
