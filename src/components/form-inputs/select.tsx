import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({ name, onChange, options, placeholder = '', className = '', label }) => {
  return (
    <>
      {label && <label className="form-label mb-0 ">{label}</label>}
      <select
        name={name}
        className={`form-select ${className}`}
        onChange={onChange}
      >
        <option selected>{placeholder}</option>
        {options && options?.map((option, i) => {
          return (
            <option
              key={i}
              value={option.value ? option.value : option.id}
            >{option.label ? option.label : option.name}</option>
          )
        })}
      </select>
    </>
  )
}
SelectField.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  options: PropTypes.array,
  option: PropTypes.array,
  onChange: PropTypes.func,
  i: PropTypes.number,
  value: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};
export default SelectField