import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface IndexBadgeStyle {
    backGroundColor: keyof typeof theme.colors
}

const IndexBadge = styled.div<IndexBadgeStyle>   `
  position: absolute;
  top: 8px;
  left: 8px;
  background: ${({ theme, backGroundColor }) => theme.colors[backGroundColor]};
  color: #fff;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 8px;
`;

export default IndexBadge