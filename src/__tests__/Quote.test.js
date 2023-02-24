import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote component', () => {
  test('', () => {
    const { container } = render(
      <Quote />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
