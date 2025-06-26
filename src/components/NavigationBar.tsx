import { ChevronLeft, UserRound } from 'lucide-react';
import * as S from './NavigationBar.styles';

const NavigationBar = () => {
    return (
        <S.Wrapper>
            <ChevronLeft size={28} />
            <S.Title>선물하기</S.Title>
            <UserRound size={25} />
        </S.Wrapper>
    );
};

export default NavigationBar;