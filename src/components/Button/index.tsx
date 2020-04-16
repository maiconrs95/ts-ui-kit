import React from 'react';

interface Props {
    /**
     * Background color
     */
    backgroundColor?: string;

    /**
     * Color
     */
    color: string;
}

const style: React.CSSProperties = {
    backgroundColor: '#00A5DB',
    color: '#fff',
};

export const Button: React.FC<Props> = ({
    children,
    backgroundColor = '#00A5DB',
    color
}) => {
    return <button style={style}>{children}</button>;
};
