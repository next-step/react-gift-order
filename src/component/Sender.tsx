import { DefaultComponentDiv, EmptyDiv12h, EmptyDiv24h, EmptyDiv4h, EmptyDiv8h, ErrorText, SideBlankDiv, SimpleInput, SubText, SubTitle } from '@/styles/Common.styled';


interface SenderProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    error: string | null;
}

const Sender: React.FC<SenderProps> = ({ value, onChange, onBlur, error }) => {
    return (
        <DefaultComponentDiv>
            <SideBlankDiv>
                <EmptyDiv8h />
                <SubTitle>보내는 사람</SubTitle>
                <EmptyDiv12h />
                <SimpleInput
                    type="text"
                    placeholder="이름을 입력하세요."
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {error ? (
                    <>
                        <EmptyDiv4h />
                        <ErrorText>{error}</ErrorText>
                    </>
                ) : (
                    <>
                        <EmptyDiv4h />
                        <SubText>* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</SubText>
                    </>
                )}
                <EmptyDiv24h />
            </SideBlankDiv>
        </DefaultComponentDiv>
    );
};

export default Sender;