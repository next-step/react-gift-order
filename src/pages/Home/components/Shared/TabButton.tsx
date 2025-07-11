/** @jsxImportSource @emotion/react */
import { type Theme as ThemeType } from '@emotion/react';
import {
  tabButton,
  subTabButton,
  iconStyle,
} from '../RankingSection/RankingSection.style';

type TabButtonProps = {
  active: boolean;
  theme: ThemeType;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
  isSubTab?: boolean;
};

const TabButton = ({ active, theme, onClick, icon, label, isSubTab = false }: TabButtonProps) => {
  const baseStyle = isSubTab ? subTabButton(theme, active) : tabButton(theme, active);

  return (
    <button onClick={onClick} css={baseStyle}>
      {icon && <span css={iconStyle}>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default TabButton;
