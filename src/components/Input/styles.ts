import styled, { css } from 'styled-components';

import { ILabel } from './index';

const withError = css`
    border: 1px solid rgb(239, 60, 62);
    color: rgb(239, 60, 62);

    &:focus {
        border: 1px solid rgb(239, 60, 62);
    }
`;

const withTheme = css`
    background-color: rgb(250, 250, 250);
    color: rgb(68, 73, 77);

    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }

    &::placeholder {
        color: rgb(226, 228, 230);
    }
`;

const withoutTheme = css`
    border: none;
    background-color: rgb(250, 250, 250);
    color: rgb(68, 73, 77);

    &:focus {
        border: 1px solid rgb(0, 165, 219);
    }

    &::placeholder {
        color: rgb(226, 228, 230);
    }
`;

export const Label = styled.label<ILabel>`
    display: flex;
    position: relative;
    height: 40px;

    input {
        border-radius: 4px;
        padding: 8px 12px;
        font-size: 16px;
        border: none;

        ${({ theme }) => !!Object.keys(theme).length ? withTheme : withoutTheme};
        ${({ error }) => error && withError};
    }
`;
