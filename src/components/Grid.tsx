import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface GridStyle {
    gap: keyof typeof theme.space
}

const Grid = styled.div<GridStyle>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme, gap }) => theme.space[gap]};
`;
export default Grid