import { DefaultComponentDiv, EmptyDiv12h, EmptyDiv24h, EmptyDiv8h, ErrorText, LowField, MiniText, SideBlankDiv, SimpleInput, SubText, SubTitle } from '@/styles/Common.styled';

interface ReceiverProps {
    nameInput: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: () => void;
        error: string | null;
    };
    phoneInput: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: () => void;
        error: string | null;
    };
    quantityInput: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: () => void;
        error: string | null;
    };
}

const Receiver: React.FC<ReceiverProps> = ({
    nameInput,
    phoneInput,
    quantityInput,
}) => {
    return (
        <DefaultComponentDiv>
            <EmptyDiv8h />
            <SideBlankDiv>
                <SubTitle>받는 사람</SubTitle>
                <EmptyDiv12h />

                {/* 이름 */}
                <LowField>
                    <MiniText>이름</MiniText>
                    <div>
                        <SimpleInput
                            type="text"
                            placeholder="이름을 입력하세요."
                            value={nameInput.value}
                            onChange={nameInput.onChange}
                            onBlur={nameInput.onBlur}
                        />
                        {nameInput.error && (
                            <ErrorText>{nameInput.error}</ErrorText>
                        )}
                    </div>
                </LowField>


                <EmptyDiv8h />

                {/* 전화번호 */}
                <LowField>
                    <MiniText>전화번호</MiniText>
                    <div>
                        <SimpleInput
                            type="text"
                            placeholder="전화번호를 입력하세요."
                            value={phoneInput.value}
                            onChange={phoneInput.onChange}
                            onBlur={phoneInput.onBlur}
                        />
                        {phoneInput.error && (
                            <ErrorText>{phoneInput.error}</ErrorText>
                        )}
                    </div>
                </LowField>
                <EmptyDiv8h />

                {/* 수량 */}
                <LowField>
                    <MiniText>수량</MiniText>
                    <div>
                        <SimpleInput
                            type="number"
                            min={1}
                            value={quantityInput.value}
                            onChange={quantityInput.onChange}
                            onBlur={quantityInput.onBlur}
                        />
                        {quantityInput.error && (
                            <ErrorText>{quantityInput.error}</ErrorText>
                        )}
                    </div>
                </LowField>
                <EmptyDiv8h />
            </SideBlankDiv>
            <EmptyDiv24h />
        </DefaultComponentDiv>
    );
};

export default Receiver;