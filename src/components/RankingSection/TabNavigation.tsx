import styled from '@emotion/styled';
import { colors, typography, spacing } from '@/styles/tokens';
import type { Tab } from '@/types';

const TabContainer = styled.div`
  display: flex;
  gap: ${spacing.xl};
  padding: 0 ${spacing.lg};
  border-bottom: 1px solid ${colors.gray200};
`;

const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: ${typography.fontSize.md};
  font-weight: ${(props) =>
    props.active ? typography.fontWeight.bold : typography.fontWeight.regular};
  color: ${(props) => (props.active ? colors.primary : colors.gray600)};
  padding: ${spacing.md} 0;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? colors.primary : 'transparent')};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const TabIcon = styled.span`
  font-size: ${typography.fontSize.lg};
`;

interface TabNavigationProps {
  tabs: readonly Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton key={tab.id} active={activeTab === tab.id} onClick={() => onTabChange(tab.id)}>
          {tab.icon && <TabIcon>{tab.icon}</TabIcon>}
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
  );
};
