import React from 'react';
import PropTypes from 'prop-types'

const TextArea = ({ label, placeholder, name, id, row, cols, value, className = '', onChange }) => {
  return (
    <div className="form-group mb-3">
      <label className="form-label mb-0  fs-4">{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        className={`form-control ps-3 ${className}`}
        rows={row}
        cols={cols}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

TextArea.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  row: PropTypes.string,
  cols: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;