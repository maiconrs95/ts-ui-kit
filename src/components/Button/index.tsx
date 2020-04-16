import React from 'react';

const style: React.CSSProperties = {
    backgroundColor: '#00A5DB',
    color: '#fff',
};

export const Button: React.FC = ({ children }) => {
    return <button style={style}>{children}</button>
}