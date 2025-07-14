
import { DefaultComponentDiv, EmptyDiv12h, EmptyDiv24h, EmptyDiv8h,  SideBlankDiv, SimpleButton, SubTitle } from '@/styles/Common.styled';
import { useState } from 'react';
import ReceiverModal from './ReceiverModal';



const Receiver = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <DefaultComponentDiv>
            <EmptyDiv8h />
            <SideBlankDiv>
                <SubTitle>받는 사람</SubTitle>
                <EmptyDiv12h />
                <SimpleButton onClick={() => setIsOpen(true)}>추가</SimpleButton>
                <ReceiverModal isOpen ={isOpen} onClose ={() => setIsOpen(false)}/>
                <EmptyDiv8h />
            </SideBlankDiv>
            <EmptyDiv24h />
        </DefaultComponentDiv>
    );
};

export default Receiver;