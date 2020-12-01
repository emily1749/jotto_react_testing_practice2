import React from 'react';
import PropTypes from 'prop-types';

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulations! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};

//you have a component, and here you list what props you need
//and what types are expected
//if called without this type then itll throw a warning
//just make sure props expect to be correct are correct
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
