import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Flex from './';

describe('Flex', () => {
  test('no basic accessibility issues', async () => {
    const { container } = render(<Flex>Some text</Flex>);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
