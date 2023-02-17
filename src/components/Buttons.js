import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ handleClick }) => (
  <div className="buttons">
    <button onClick={handleClick} type="submit">AC</button>
    <button onClick={handleClick} type="submit">+/-</button>
    <button onClick={handleClick} type="submit">%</button>
    <button onClick={handleClick} type="submit" className="operator">÷</button>
    <button onClick={handleClick} type="submit">7</button>
    <button onClick={handleClick} type="submit">8</button>
    <button onClick={handleClick} type="submit">9</button>
    <button onClick={handleClick} type="submit" className="operator">×</button>
    <button onClick={handleClick} type="submit">4</button>
    <button onClick={handleClick} type="submit">5</button>
    <button onClick={handleClick} type="submit">6</button>
    <button onClick={handleClick} type="submit" className="operator">-</button>
    <button onClick={handleClick} type="submit">1</button>
    <button onClick={handleClick} type="submit">2</button>
    <button onClick={handleClick} type="submit">3</button>
    <button onClick={handleClick} type="submit" className="operator">+</button>
    <button onClick={handleClick} type="submit" className="span-two">0</button>
    <button onClick={handleClick} type="submit">.</button>
    <button onClick={handleClick} type="submit" className="operator">=</button>
  </div>
);

Buttons.propTypes = { handleClick: PropTypes.func.isRequired };
export default Buttons;
