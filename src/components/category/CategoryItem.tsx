import styled from '@emotion/styled';
import { Button } from '@/components/common';

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.semanticColors.background.fill};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.spacing2};
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const IconEmoji = styled.span`
  font-size: 24px;
  line-height: 1;
`;

const Label = styled.span`
  font-size: ${(props) => props.theme.typography.label2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.label2Regular.fontWeight};
  line-height: ${(props) => props.theme.typography.label2Regular.lineHeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

interface CategoryItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const CategoryItem = ({ icon, label, onClick }: CategoryItemProps) => {
  return (
    <Button variant="category" onClick={onClick}>
      <IconWrapper>
        {icon.startsWith('http') ? (
          <IconImage src={icon} alt={label} />
        ) : (
          <IconEmoji>{icon}</IconEmoji>
        )}
      </IconWrapper>
      <Label>{label}</Label>
    </Button>
  );
};

export default CategoryItem;
