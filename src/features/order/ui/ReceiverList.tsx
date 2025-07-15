import { useReceiverContext } from "@/features/order/contexts/ReceiverContext";

import * as Styles from "./ReceiverList.styled";

export const ReceiverList = () => {
    const { state } = useReceiverContext();

    console.log("ReceiverList state:", state.receivers);

    if (state.receivers.length === 0) {
        return <Styles.EmptyState>받는 사람을 추가해주세요.</Styles.EmptyState>;
    }

    return (
        <Styles.Container>
            <Styles.TableHeader>
                <Styles.HeaderCell>이름</Styles.HeaderCell>
                <Styles.HeaderCell>전화번호</Styles.HeaderCell>
                <Styles.HeaderCell>수량</Styles.HeaderCell>
            </Styles.TableHeader>

            <Styles.TableBody>
                {state.receivers.map((receiver, index) => (
                    <Styles.ReceiverItem key={index}>
                        <Styles.CellContent>{receiver.receiverName}</Styles.CellContent>
                        <Styles.CellContent>{receiver.phoneNumber}</Styles.CellContent>
                        <Styles.CellContent>{receiver.quantity}개</Styles.CellContent>
                    </Styles.ReceiverItem>
                ))}
            </Styles.TableBody>
        </Styles.Container>
    );
};
