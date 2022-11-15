import React from 'react'
import PropTypes from 'prop-types';

import Loading from '../loading';

const Button = ({ name, loading, type, key, icon, className, children, onClick }: any) => {
  return (
    <>
      <button
        type={type ? type : 'button'}
        key={key}
        className={`btn btn-primary  ${className}`}
        disabled={loading}
        onClick={onClick}>
        {children}{(loading ? <Loading /> : name)}
        <i className={icon}></i>
      </button>
    </>
  )
}
export default Button