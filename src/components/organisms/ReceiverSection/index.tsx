import { Label } from '@/components';
import * as S from './styles';

const ReceiverSection = () => {
  return (
    <S.Container>
      <S.FirstSection>
        <S.SectionTitle>
          <Label variant="bold">받는 사람</Label>
          <S.ModalBtn>추가</S.ModalBtn>
        </S.SectionTitle>
      </S.FirstSection>
      <S.EmptyState>
        <S.EmptyStateText>
          받는 사람이 없습니다.<br />
          받는 사람을 추가해주세요.
        </S.EmptyStateText>
      </S.EmptyState>
    </S.Container>
  );
};

export default ReceiverSection; 