import { DefaultComponentDiv, EmptyDiv12h, EmptyDiv24h, EmptyDiv8h, LowField, MiniText, SideBlankDiv, SimpleInput, SubTitle } from '@/styles/Common.styled';
import React, { useState } from 'react'

const Receiver = () => {
    const [recipientName, setRecipientName] = useState('');
    const [recipientPhone, setRecipientPhone] = useState('');
    const [quantity, setQuantity] = useState(1);

    return (
        <DefaultComponentDiv>
            <EmptyDiv8h />
            <SideBlankDiv>
                <SubTitle>받는 사람</SubTitle>
                <EmptyDiv12h />
                <LowField>
                    <MiniText>이름</MiniText>
                    <SimpleInput
                        type="text"
                        placeholder="이름을 입력하세요."
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                    />
                </LowField>
                <EmptyDiv8h />
                <LowField>
                    <MiniText>전화번호</MiniText>
                    <SimpleInput
                        type="text"
                        placeholder="전화번호를 입력하세요."
                        value={recipientPhone}
                        onChange={(e) => setRecipientPhone(e.target.value)}
                    />
                </LowField>
                <EmptyDiv8h />
                <LowField>
                    <MiniText>수량</MiniText>
                    <SimpleInput
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <EmptyDiv8h />
                </LowField>
            </SideBlankDiv>
            <EmptyDiv24h/>
        </DefaultComponentDiv>
    );

}

export default Receiver