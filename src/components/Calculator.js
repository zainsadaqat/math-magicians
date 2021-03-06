import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Output from './Output';
import Button from './Button';

const generateResult = ({ total, next, operation }) => {
  if (!total && !next && !operation) {
    return 0;
  }
  if (!total && next) {
    return `${next}`;
  }
  if (operation && total && !next) {
    return `${total} ${operation}`;
  }
  if (total && next && operation) {
    return `${total} ${operation} ${next}`;
  }
  return `${total}`;
};

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const clickEvent = (event) => {
    const { value } = event.target;
    const resultObject = calculate(state, value);
    setState(resultObject);
  };

  const outputVal = generateResult(state);

  return (
    <section className="calculator-container">
      <main className="grid-container">
        <Output outputval={outputVal.toString()} />
        <Button className="ac" value="AC" clickEvent={clickEvent} />
        <Button className="add-sub" value="+/-" clickEvent={clickEvent} />
        <Button className="modulus" value="%" clickEvent={clickEvent} />
        <Button className="divide" value="÷" clickEvent={clickEvent} />
        <Button className="seven" value="7" clickEvent={clickEvent} />
        <Button className="eight" value="8" clickEvent={clickEvent} />
        <Button className="nine" value="9" clickEvent={clickEvent} />
        <Button className="cross" value="x" clickEvent={clickEvent} />
        <Button className="four" value="4" clickEvent={clickEvent} />
        <Button className="five" value="5" clickEvent={clickEvent} />
        <Button className="six" value="6" clickEvent={clickEvent} />
        <Button className="minus" value="-" clickEvent={clickEvent} />
        <Button className="one" value="1" clickEvent={clickEvent} />
        <Button className="two" value="2" clickEvent={clickEvent} />
        <Button className="three" value="3" clickEvent={clickEvent} />
        <Button className="add" value="+" clickEvent={clickEvent} />
        <Button className="zero" value="0" clickEvent={clickEvent} />
        <Button className="dot" value="." clickEvent={clickEvent} />
        <Button className="equal" value="=" clickEvent={clickEvent} />
      </main>
    </section>
  );
};

export default Calculator;
