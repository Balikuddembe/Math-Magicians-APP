import Buttons from '../components/Buttons';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import calculate from '../logic/calculate';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Button renders  correctly', () => {
    const handleClick = (event) => {
        const values = calculate(state, event.target.innerText);
        setState(values);
    };
    act(() => {
        render(
            <Buttons
                onClick={handleClick}
            />,
            container
        );
    });

    expect(
        container.querySelector("[class='buttons']").childElementCount
    ).toEqual(19);
});

