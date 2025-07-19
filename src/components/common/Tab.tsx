import styled from '@emotion/styled';
import type { LiHTMLAttributes, ReactNode } from 'react';

interface TabProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  active: boolean;
  variant?: 'main' | 'sub';
}

export function Tab({ children, active, variant = 'main', ...props }: TabProps) {
  return (
    <StyledTab active={active} variant={variant} {...props}>
      {children}
    </StyledTab>
  );
}

const StyledTab = styled.li<{ active: boolean; variant: 'main' | 'sub' }>`
  ${({ theme }) => theme.typography.label.label2Bold};
  white-space: nowrap;
  cursor: pointer;

  ${({ active, theme, variant }) => {
    if (variant === 'main') {
      return `
        padding: ${theme.spacing.spacing1} ${theme.spacing.spacing3};
        border-radius: 9999px;
        background-color: ${active ? theme.colors.blue.blue700 : theme.colors.blue.blue100};
        color: ${active ? '#fff' : theme.colors.blue.blue800};
      `;
    }
    if (variant === 'sub') {
      return `
        color: ${active ? theme.colors.blue.blue800 : theme.semanticColors.text.sub};
      `;
    }
  }}
`;
