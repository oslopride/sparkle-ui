import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Button from './';

describe('Button', () => {
  test('no basic accessibility issues', async () => {
    const { container } = render(<Button />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  test('onClick handler works', async () => {
    const onClickFn = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickFn} />);

    const buttonElement = getByTestId('button');
    fireEvent.click(buttonElement);

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
