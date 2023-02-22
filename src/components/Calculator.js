import React, { useState } from 'react';
import OutPut from './OutPut';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const handleClick = (event) => {
    const values = calculate(state, event.target.innerText);
    setState(values);
  };

  return (
    <div className="calculator">
      <h1 className="calculator-title">Let&apos;s do some math!</h1>
      <div>
        <OutPut state={state} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
}
export default Calculator;
