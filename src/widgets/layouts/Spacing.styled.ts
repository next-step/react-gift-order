import type { BaseSpacingProps } from "@/widgets/layouts/Spacing";

import styled from "@emotion/styled";

export const VerticalSpacing = styled.div<BaseSpacingProps>`
    width: 100%;
    height: ${({ size }) => size};

    background-color: ${({ backgroundColor }) => backgroundColor ?? "transparent"};
`;
