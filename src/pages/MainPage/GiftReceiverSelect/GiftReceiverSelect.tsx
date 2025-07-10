import * as S from './GiftReceiverSelect.styles';
import { Plus } from 'lucide-react';

const GiftReceiverSection = () => {
  return (
    <S.SectionWrapper>
      <S.Card>
        <S.Title>
          <S.IconBox>
            <Plus size={25} />
          </S.IconBox>
          선물할 친구를 선택하세요!
        </S.Title>
      </S.Card>
    </S.SectionWrapper>
  );
};

export default GiftReceiverSection;
