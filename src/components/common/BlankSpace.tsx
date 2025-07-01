import styled from "@emotion/styled";

type Props = {
  size: number;
  horizontal?: boolean;
};

/**
 * 레이아웃에서 여백을 생성하는 컴포넌트
 *
 * @param {Props} props - 컴포넌트 속성
 * @param {number} props.size - 여백의 크기 (픽셀 단위)
 * @param {boolean} [props.horizontal] - 여백의 방향 (true: 가로, false: 세로)
 * @returns {JSX.Element} 여백을 생성하는 div 엘리먼트
 */

export const BlankSpace = ({ size, horizontal }: Props) => {
  return <StyledDiv size={size} horizontal={horizontal} />;
};

const StyledDiv = styled.div<Props>`
  ${({ size, horizontal }) =>
    horizontal
      ? `width: ${size}px; height: 1px;`
      : `height: ${size}px; width: 1px;`}
`;
