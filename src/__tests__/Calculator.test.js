import Calculator from '../components/Calculator'
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

it('Calculator renders  correctly all buttons', () => {
    act(() => {
        render(
            <Calculator />,
            container
        );
    });

    expect(
        container.querySelector("[class='buttons']").childElementCount
    ).toEqual(19);
});

