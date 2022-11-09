import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'

const LinkButton = ({ name, path, className, onClick, icon }) => {
  return (
    <>
      <Link href={path}>
        <a className={`btn btn-link ${className}`} onClick={onClick}><i className={icon}></i>
          {name}
        </a>
      </Link>
    </>
  )
}
LinkButton.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
export default LinkButton