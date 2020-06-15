import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/* eslint-disable jsx-a11y/label-has-for */
const Field = ({
  InputChange,
  placeholder,
  name,
  value,
  type,
}) => {
  const handleChange = (event) => {
    const { name: fieldName, value: fieldValue } = event.target;
    InputChange(fieldName, fieldValue);
  };
  const cssClassnames = classNames('field', 'border-animation', {
    'field--has-content': value.length > 0,
  });
  return (
    <div id="range" className={cssClassnames}>
      <input
        value={value}
        onChange={handleChange}
        id={`field-id-${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        className="field-input .border-animation__inner"
      />
      <label
        htmlFor={`field-id-${name}`}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};
Field.propTypes = {
  InputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

Field.defaultProps = {
  placeholder: '',
  type: 'text',
  value: '',
};

export default Field;
