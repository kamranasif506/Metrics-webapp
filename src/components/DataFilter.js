import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DataFilter = ({ onFilter }) => {
  const [filterValue, setFilterValue] = useState('');
  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterValue(value);
    onFilter(value);
  };

  return (
    <div>
      <div className="row my-2">
        <div className="col-12">
          <input
            type="text"
            placeholder="Filter team..."
            className="form-control w-100 white-placeholder-input"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </div>
      </div>

    </div>
  );
};

DataFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default DataFilter;
