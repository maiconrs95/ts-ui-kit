import React, { useState } from 'react';
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
    });
