import React from 'react';
import PropTypes from 'prop-types'

const CheckBox = ({ name, values, onChange, checkBoxOptions, className = '' }: any) => {
  return (
    <>
      {
        checkBoxOptions?.map((option, i) => {
          return (
            <div key={i} className="form-check mb-2">
              <input
                type="checkbox"
                name={name}
                value={option.value}
                onChange={onChange}
                className={`form-check-input ${className}`}
                checked={values?.includes(option.value,)}
              />
              <label className="form-check-label fs-4">{option.label}</label>
            </div>
          )
        })
      }
    </>
  )
}
CheckBox.propTypes = {
  checkBoxOptions: PropTypes.any,
  type: PropTypes.any,
  name: PropTypes.string,
  values: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
export default CheckBox