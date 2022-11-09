import React from 'react'
import PropTypes from 'prop-types';

const Alert = ({ alerts, className }) => {
  return (
    <>
      {alerts?.error === true ?
        <div className={className ? className : 'alert alert-danger fs-5'} >
          {alerts?.message ? alerts?.message : alerts.error}
        </div>
        :
        <div className={className ? className : 'alert alert-success fs-5'} >
          {alerts?.message && <span>{alerts?.message} </span>}
        </div>
      }
    </>
  )
}

Alert.propTypes = {
  className: PropTypes.string,
  alerts: PropTypes.string,
};
export default Alert
