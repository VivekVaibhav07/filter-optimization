

import React, { useEffect, useState, useMemo } from 'react';
import FilterDropdown from './FilterDropdown';
import DataTableWrapper from './DataTableWrapper';
import { filterData, getAvailableOptions } from '../utils/dataUtils';
import data from './../data/data.json'
import ErrorBoundary from './ErrorBoundary';
import debounce from 'lodash/debounce';


const FilterTable = () => {
  const [filters, setFilters] = useState({ mod350: [], mod8000: [], mod20002: [] });
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (column, values) => {
    debouncedUpdateFilter(column, values);
  };

  const debouncedUpdateFilter = useMemo(() => debounce((column, values) => {
    setFilters(prev => ({ ...prev, [column]: values }));
  }, 300), []);

  useEffect(() => {
    return () => debouncedUpdateFilter.cancel();
  }, [debouncedUpdateFilter]);

  const filtered = useMemo(() => filterData(data, filters), [filters]);
  const options = useMemo(() => getAvailableOptions(data, filters), [filters]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {['mod350', 'mod8000', 'mod20002'].map(col => (
          <ErrorBoundary key={col}>
            <FilterDropdown
              column={col}
              options={options[col]}
              selected={filters[col]}
              onChange={handleFilterChange}
            />
          </ErrorBoundary>
        ))}
      </div>
      <ErrorBoundary>
        <DataTableWrapper data={filtered} />
      </ErrorBoundary>
    </div>
  );
};

export default FilterTable;