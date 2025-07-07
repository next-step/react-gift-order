import { DefaultComponentDiv, EmptyDiv12h, EmptyDiv24h, EmptyDiv4h, EmptyDiv8h, SideBlankDiv, SimpleInput, SubText, SubTitle } from '@/styles/Common.styled';
import { useState } from 'react';


const Sender = () => {
    const [senderName, setSenderName] = useState('');

    return (
        <DefaultComponentDiv>
            <SideBlankDiv>
                <EmptyDiv8h />
                <SubTitle>보내는 사람</SubTitle>
                <EmptyDiv12h />
                <SimpleInput
                    type="text"
                    placeholder="이름을 입력하세요."
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                />
                <EmptyDiv4h />
                <SubText>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SubText>
                <EmptyDiv24h />
            </SideBlankDiv>
        </DefaultComponentDiv>
    );
}

export default Sender