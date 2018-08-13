import React, { PropTypes } from 'react';

const errorlist = ({ errors }) => {
  const show = errors.length > 0;
  return (
    show &&
    <div className="form-row my-2 px-2 py-1">
      <div className="col-md-12 px-0 py-0 mb-0">
        <ul className="list-group">
          {errors.map((error, index) => <li key={index} className="list-group-item list-group-item-danger py-1">{error}</li>)}
        </ul>
      </div>
    </div>
  );
};

errorlist.propTypes = {
  errors: PropTypes.array.isRequired
};

export default errorlist;
