import React from 'react';

import { Label } from './styles';

export interface Props {
    error?: boolean;

    name: string;
    value: string;
    type?: string;
    color?: string;
    placeholder?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILabel {
    error?: boolean;
}

export const Input: React.FC<Props> = ({
    error,

    name,
    type = 'text',
    color = '#00A5DB',
    value,
    placeholder,

    onChange,
}) => {
    return (
        <Label htmlFor={name} color={color} error={error}>
            <input
                name={name}
                type={type}
                aria-label={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Label>
    );
};
