import styled, { css } from 'styled-components';

import { ILabel } from './index';

const Error = css`
    border: 1px solid rgb(239, 60, 62);
    color: rgb(239, 60, 62);

    &:focus {
        border: 1px solid rgb(239, 60, 62);
    }
`;

export const Label = styled.label<ILabel>`
    display: flex;
    position: relative;
    height: 40px;

    input {
        border-radius: 4px;
        padding: 8px 12px;
        border: none;

        background-color: rgb(250, 250, 250);
        color: rgb(68, 73, 77);
        font-size: 16px;

        &:focus {
            border: 1px solid ${(props) => {
        console.log(props.theme)
        return props.theme.primary || 'rgb(0, 165, 219)'
    }};
        }

        &::placeholder {
            color: rgb(226, 228, 230);
        }

        ${({ error }) => error && Error}
    }
`;
