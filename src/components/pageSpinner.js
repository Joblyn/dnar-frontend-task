import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

const PageSpinner = () => {
  return (
    <div className="page-spinner">
      <Spinner style={{color: "#7d30f5", fontSize: '1.5rem'}}/>
    </div>
  );
};

PageSpinner.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

export default PageSpinner;