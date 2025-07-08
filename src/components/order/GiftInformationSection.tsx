import styled from "@emotion/styled";
import type { Gift } from "@/types/gift";

type GiftInformationSectionProps = {
  selectedGift: Gift;
};

const GiftInformationSection = ({
  selectedGift,
}: GiftInformationSectionProps) => {
  return (
    <Section>
      <SectionTitle>선물 정보</SectionTitle>
      <GiftDiv>
        <Img src={selectedGift.imageURL} alt={selectedGift.name} />
        <div>
          <GiftName>{selectedGift.name}</GiftName>
          <GiftBrand>{selectedGift.brandInfo.name}</GiftBrand>
          <GiftPrice>
            <Span>상품가 </Span>
            {selectedGift.price.sellingPrice}원
          </GiftPrice>
        </div>
      </GiftDiv>
    </Section>
  );
};

export default GiftInformationSection;

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;

const GiftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing3} ${theme.spacing.spacing4}`};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 0.5rem;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
  object-position: center;
`;

const GiftName = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
`;

const GiftBrand = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray700};
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
`;

const GiftPrice = styled.p`
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
`;

const Span = styled.span`
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
`;
