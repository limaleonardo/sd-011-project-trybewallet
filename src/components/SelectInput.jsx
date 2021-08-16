import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  constructor(props) {
    super(props);

    this.mapOptions = this.mapOptions.bind(this);
  }

  mapOptions() {
    const { options } = this.props;
    return (
      options.map((value, index) => (
        <option
          key={ index }
          value={ value }
          name={ value }
        >
          { value }
        </option>
      ))
    );
  }

  render() {
    const {
      label,
      handleChange,
    } = this.props;

    return (
      <div>
        <label className="form-label" htmlFor={ `${label}` }>
          { `${label}` }
          <select
            id={ `${label}` }
            className="form-select inputSizing"
            onChange={ handleChange }
          >
            { this.mapOptions() }
          </select>
        </label>
      </div>
    );
  }
}

export default SelectInput;

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
