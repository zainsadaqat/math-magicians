import React from 'react';
import PropTypes from 'prop-types';

const Output = ({ outputval }) => (
  <button type="button" className="result">
    {outputval}
  </button>
);

Output.propTypes = { outputval: PropTypes.string.isRequired };

export default Output;
