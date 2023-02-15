import React from 'react';

function Buttons() {
  return (
    <div className="buttons">
      <button type="submit">AC</button>
      <button type="submit">+/-</button>
      <button type="submit">%</button>
      <button type="submit" className="operator">÷</button>
      <button type="submit">7</button>
      <button type="submit">8</button>
      <button type="submit">9</button>
      <button type="submit" className="operator">×</button>
      <button type="submit">4</button>
      <button type="submit">5</button>
      <button type="submit">6</button>
      <button type="submit" className="operator">-</button>
      <button type="submit">1</button>
      <button type="submit">2</button>
      <button type="submit">3</button>
      <button type="submit" className="operator">+</button>
      <button type="submit" className="span-two">0</button>
      <button type="submit">.</button>
      <button type="submit" className="operator">=</button>
    </div>
  );
}

export default Buttons;
