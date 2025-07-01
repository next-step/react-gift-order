/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';
import theme from '../../styles/theme';

type CategoryItemProps = {
  themeId: number;
  name: string;
  image: string;
  theme: ThemeType;
};

const itemStyle = css`
  width: 100%;
  max-width: 104px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column; 
  align-items: center; 

  cursor: pointer;
`;

const imageStyle = css`
  width: 50px;
  height: 50px;
  border-radius: ${theme.spacing[3]};
  object-fit: cover;
  margin-bottom: ${theme.spacing[1]};
`;

const nameStyle = (theme: ThemeType) => css`
  color: ${theme.color.gray.gray1000};
  font-size: ${theme.typography.label2Regular.fontSize};
  font-weight: ${theme.typography.label2Regular.fontWeight};
  line-height: ${theme.typography.label2Regular.lineHeight};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CategoryItem = ({ themeId, name, image, theme }: CategoryItemProps) => {
  return (
    <div key={themeId} css={itemStyle}>
      <img src={image} alt={name} width={100} height={100} css={imageStyle} />
      <span css={nameStyle(theme)} title={name}>
        {name}
      </span>
    </div>
  );
};

export default CategoryItem;
