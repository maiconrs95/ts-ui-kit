import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Input } from '../src/components';

storiesOf('Input', module)
    .add('Default', () => {
        const [inputValue, setInputValue] = useState('');

        return (
            <Input
                name="ts-ui-ki"
                placeholder="Input a value..."
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
            />
        );
    })
    .add('With Theme', () => {
        const [inputValue, setInputValue] = useState('');

        const theme = {
            company: 1,
            primary: 'green',
            secondary: 'blue',
        };

        return (
            <ThemeProvider theme={theme}>
                <Input
                    name="ts-ui-ki"
                    placeholder="Input a value..."
                    value={inputValue}
                    onChange={({ target }) => setInputValue(target.value)}
                />
            </ThemeProvider>
        );
    })
    .add('With Error', () => {
        const [inputValue, setInputValue] = useState('');

        return (
            <Input
                name="ts-ui-ki"
                placeholder="Input a value..."
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                error
            />
        );
    })
    .add('Themed with Error', () => {
        const [inputValue, setInputValue] = useState('');

        const theme = {
            company: 1,
            primary: 'darkblue',
            secondary: 'blue',
        };

        return (
            <ThemeProvider theme={theme}>
                <Input
                    name="ts-ui-ki"
                    placeholder="Input a value..."
                    value={inputValue}
                    onChange={({ target }) => setInputValue(target.value)}
                    error
                />
            </ThemeProvider>
        );
    });
