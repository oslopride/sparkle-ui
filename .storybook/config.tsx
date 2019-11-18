import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';
// import { withInfo } from '@storybook/addon-info';
import { GlobalStyle } from '../src/shared/global'

// @ts-ignore
// addDecorator(withInfo);
addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));


configure([
  require.context('../src', false, /Intro\.stories\.mdx/),
  require.context('../src/', true, /\.stories\.(tsx|mdx)$/)
], module);
