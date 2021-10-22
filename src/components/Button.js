import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const { value, clickEvent, className } = props;
  return (
    <button
      type="button"
      className={className}
      value={value}
      onClick={clickEvent}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
