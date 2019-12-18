import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe';
import Box from '.'

describe('Box', () => {
    test('no basic accessibility issues', async () => {
        const { container } = render(<Box>Some test</Box>);
        const result = await axe(container)

        expect(result).toHaveNoViolations();
    })
})