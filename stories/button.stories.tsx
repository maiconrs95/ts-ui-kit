import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Button } from '../src/components';

storiesOf('Button', module)
    .add('Default', () => {

        return (
            <Button />
        );
    })
    .add('With Theme', () => {
        const theme = {
            primary: 'rgb(66, 173, 60)',
            secondary: 'blue',
            radius: '5px',
            color: 'rgb(90, 96, 101)',
        };

        return (
            <ThemeProvider theme={theme}>
                <Button />
            </ThemeProvider>
        );
    });

