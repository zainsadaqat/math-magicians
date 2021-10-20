import React from 'react';
import Button from './Button';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container">
        <main className="grid">
          <Button className="result" btnValue="0" />

          <Button className="ac" btnValue="AC" />
          <Button className="add-sub" btnValue="+/-" />
          <Button className="modulus" btnValue="%" />
          <Button className="divide operation" btnValue="÷" />

          <Button className="seven" btnValue="7" />
          <Button className="eight" btnValue="8" />
          <Button className="nine" btnValue="9" />
          <Button className="cross operation" btnValue="x" />

          <Button className="four" btnValue="4" />
          <Button className="five" btnValue="5" />
          <Button className="six" btnValue="6" />
          <Button className="minus operation" btnValue="-" />

          <Button className="one" btnValue="1" />
          <Button className="two" btnValue="2" />
          <Button className="three" btnValue="3" />
          <Button className="add operation" btnValue="+" />

          <Button className="zero" btnValue="0" />
          <Button className="dot" btnValue="." />
          <Button className="equal operation" btnValue="=" />
        </main>
      </section>
    );
  }
}

export default Calculator;
