import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const {
      label,
      handleChange,
      type,
    } = this.props;
    return (
      <div>
        <label className="form-label" htmlFor={ label }>
          { `${label}` }
          <input
            type={ type }
            name={ label }
            id={ label }
            className="form-control inputSizing"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
