import { useOrder } from '@/context/OrderContext';
import { DefaultComponentDiv, Div100p, EmptyDiv12h, EmptyDiv24h, EmptyDiv8h, ErrorText, LowField, MiniText, SideBlankDiv, SimpleInput, SubTitle } from '@/styles/Common.styled';



const Receiver = () => {
      const {
        recipientNameInput,
        recipientPhoneInput,
        quantityInput }= useOrder()
    return (
        <DefaultComponentDiv>
            <EmptyDiv8h />
            <SideBlankDiv>
                <SubTitle>받는 사람</SubTitle>
                <EmptyDiv12h />

                {/* 이름 */}
                <LowField>
                    <MiniText>이름</MiniText>
                    <Div100p>
                        <SimpleInput
                            type="text"
                            placeholder="이름을 입력하세요."
                            value={recipientNameInput.value}
                            onChange={recipientNameInput.onChange}
                        />
                        {recipientNameInput.error && (
                            <ErrorText>{recipientNameInput.error}</ErrorText>
                        )}
                    </Div100p>
                </LowField>


                <EmptyDiv8h />

                {/* 전화번호 */}
                <LowField>
                    <MiniText>전화번호</MiniText>
                    <Div100p>
                        <SimpleInput
                            type="text"
                            placeholder="전화번호를 입력하세요."
                            value={recipientPhoneInput.value}
                            onChange={recipientPhoneInput.onChange}
                        />
                        {recipientPhoneInput.error && (
                            <ErrorText>{recipientPhoneInput.error}</ErrorText>
                        )}
                    </Div100p>
                </LowField>
                <EmptyDiv8h />

                {/* 수량 */}
                <LowField>
                    <MiniText>수량</MiniText>
                    <Div100p>
                        <SimpleInput
                            type="number"
                            min={1}
                            value={quantityInput.value}
                            onChange={quantityInput.onChange}
                        />
                        {quantityInput.error && (
                            <ErrorText>{quantityInput.error}</ErrorText>
                        )}
                    </Div100p>
                </LowField>
                <EmptyDiv8h />
            </SideBlankDiv>
            <EmptyDiv24h />
        </DefaultComponentDiv>
    );
};

export default Receiver;