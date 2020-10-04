import React from 'react';
import PropTypes from 'prop-types';

const Intros = (summary) => {
  return (
    <div className='intros'>
      ERROR HERE: {summary} variable can't be wrapped in curly braces; reason
      unknown
    </div>
  );
};

Intros.propTypes = {
  summary: PropTypes.string.isRequired,
};

Intros.defaultProps = {
  summary: 'Summary...',
};

export default Intros;
