import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
    border-radius: 8px 8px 0 0;

    background-color: ${({ theme }) => theme.colors.gray.gray100};

    font-weight: 600;
    font-size: 14px;

    color: #000;
`;

export const HeaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TableBody = styled.div`
    border: 1px solid #e9ecef;
    border-top: none;
    border-radius: 0 0 8px 8px;
`;

export const EmptyState = styled.div`
    padding: 40px 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
    border-radius: 8px;

    text-align: center;
    font-size: 14px;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.gray.gray600};
    background-color: ${({ theme }) => theme.colors.gray.gray100};
`;

export const ReceiverItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    padding: 12px 16px;

    border-bottom: 1px solid #e9ecef;

    &:last-child {
        border-bottom: none;
    }
`;

export const CellContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;

    color: ${({ theme }) => theme.colors.gray.gray900};
`;
