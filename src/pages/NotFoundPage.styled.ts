import styled from "@emotion/styled";

export const Container = styled.div`
    margin: 0px auto;
    padding: 80px 20px;
`;

export const Image = styled.img`
    display: block;

    width: 150px;
    height: 150px;

    margin: 0px auto;
`;

export const Title = styled.h1`
    text-align: center;

    font-size: ${({ theme }) => theme.typography.title.title1Bold.size};
    font-weight: ${({ theme }) => theme.typography.title.title1Bold.weight};

    color: ${({ theme }) => theme.colors.gray.gray900};
`;

export const Description = styled.p`
    text-align: center;

    font-size: ${({ theme }) => theme.typography.body.body1Regular.size};
    font-weight: ${({ theme }) => theme.typography.body.body1Regular.weight};

    color: ${({ theme }) => theme.colors.gray.gray700};
`;
