import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { btnValue, className } = this.props;
    return (
      <button type="button" className={`btn ${className}`}>
        {btnValue}
      </button>
    );
  }
}

Button.propTypes = {
  btnValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
