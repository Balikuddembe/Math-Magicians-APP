import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/NavBar';

describe('Nav', () => {
  test('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
