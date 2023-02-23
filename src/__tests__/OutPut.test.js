import React from 'react';
import { render } from '@testing-library/react';
import OutPut from '../components/OutPut';

describe('OutPut component', () => {
  test('renders correctly', () => {
    const state = {
      total: '10',
      next: '4',
      operation: '+',
    };
    const tree = render(
      <OutPut state={state} />,
    );
    expect(tree.firstChild).toMatchSnapshot();
  });
});
