import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Button from './';

export default {
  title: 'Sparkle/Button',
  parameters: {
    component: Button,
    componentSubtitle: 'It is a glorious button that you can press.',
  },
};

export const DefaultFromTSX = (): JSX.Element => (
  <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
    Button
  </Button>
);

DefaultFromTSX.story = {
  parameters: { docs: { storyDescription: 'This is the default button!' } },
};
