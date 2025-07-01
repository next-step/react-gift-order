import React from 'react';
import styled from '@emotion/styled';

const SectionWrapper = styled.section<{ spacing?: 'sm' | 'md' | 'lg' }>`
  margin-bottom: ${(props) => {
    switch (props.spacing) {
      case 'sm':
        return props.theme.spacing.spacing6;
      case 'md':
        return props.theme.spacing.spacing8;
      case 'lg':
        return props.theme.spacing.spacing12;
      default:
        return props.theme.spacing.spacing8;
    }
  }};
`;

const SectionHeader = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.spacing4};
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.title2Bold.fontWeight};
  line-height: ${(props) => props.theme.typography.title2Bold.lineHeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  margin: 0;
`;

const SectionSubtitle = styled.p`
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Regular.fontWeight};
  line-height: ${(props) => props.theme.typography.body2Regular.lineHeight};
  color: ${(props) => props.theme.semanticColors.text.sub};
  margin: ${(props) => props.theme.spacing.spacing1} 0 0 0;
`;

const SectionContent = styled.div`
  /* 섹션 내용 영역 */
`;

interface SectionProps {
  title?: string;
  subtitle?: string;
  spacing?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Section = ({
  title,
  subtitle,
  spacing = 'md',
  children,
}: SectionProps) => {
  return (
    <SectionWrapper spacing={spacing}>
      {(title || subtitle) && (
        <SectionHeader>
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;
