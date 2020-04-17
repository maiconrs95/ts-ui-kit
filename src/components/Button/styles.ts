import styled, { css } from 'styled-components';

const withTheme = css`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.color};
    border-radius: ${({ theme }) => theme.radius};
`;

const withoutTheme = css`
    background-color: rgba(0, 165, 219);
    color: #fff;
    border-radius: 20px;
`;

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    height: 40px;
    padding: 0 19px;
    border: none;
    font-size: 21px;

    &:hover {
        cursor: pointer;
    }

    ${({ theme }) => !!Object.keys(theme).length ? withTheme : withoutTheme};
`;
