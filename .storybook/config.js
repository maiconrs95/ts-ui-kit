import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';

import theme from './theme';

import './reset.css';

addParameters({
    options: {
        theme,
    },
});

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(centered);

// Add stories
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
