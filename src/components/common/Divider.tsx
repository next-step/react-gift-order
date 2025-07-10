import styled from "@emotion/styled";

type DividerProps = {
  spacing?: string;
  fill?: boolean;
};
const Divider = ({ spacing = "1.875rem", fill = true }: DividerProps) => {
  return <Style spacing={spacing} fill={fill} />;
};

const Style = styled.div<DividerProps>`
  width: 100%;
  height: ${({ spacing }) => spacing};
  background-color: ${({ fill, theme }) =>
    fill ? theme.color.backgroundColor.default : theme.color.backgroundColor.fill};
`;

export default Divider;
