import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWords } from './actions';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form ClassName='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          type='submit'
        >
          Submit
        </button>
      </form>
    );
    return <div>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);