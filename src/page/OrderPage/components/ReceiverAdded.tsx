import styled from '@emotion/styled';
import type { UseInputReturn } from '../hooks/useInput';
import type { useCheckAmountReturn } from '../hooks/useCheckAmount';
import ReceiverInfo from './ReceiverInfo';

const ReceiverAddedContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
`;

interface ReceiverAddedProps {
  users: { id: number }[];
  nameHook: UseInputReturn<HTMLInputElement>;
  numberHook: UseInputReturn<HTMLInputElement>;
  amountHook: useCheckAmountReturn;
}

const ReceiverAdded = ({ users, nameHook, numberHook, amountHook }: ReceiverAddedProps) => {
  return (
    <ReceiverAddedContainer>
      {users.map((user, idx) => (
        <ReceiverInfo
          key={user.id}
          index={idx}
          nameHook={nameHook}
          numberHook={numberHook}
          amountHook={amountHook}
        />
      ))}
    </ReceiverAddedContainer>
  );
};

export default ReceiverAdded;
