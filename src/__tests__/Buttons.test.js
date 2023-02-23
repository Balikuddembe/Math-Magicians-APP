import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Buttons from '../components/Buttons';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Button renders  correctly', () => {
  const handleClick = () => {};
  act(() => {
    render(
      <Buttons
        onClick={handleClick}
      />,
      container,
    );
  });

  expect(
    container.querySelector("[class='buttons']").childElementCount,
  ).toEqual(19);
});
