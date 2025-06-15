import React, { useEffect, useState } from 'react';
import FilterDropdown from './FilterDropdown';
import DataTableWrapper from './DataTableWrapper';
import { filterData, getAvailableOptions } from '../utils/dataUtils';
import data from '../data/data.json';

const FilterTable = () => {
//   const [filters, setFilters] = useState({ mod3: [], mod4: [], mod5: [], mod6: [] });
//   const [filteredData, setFilteredData] = useState([]);
//   const [options, setOptions] = useState({ mod3: [], mod4: [], mod5: [], mod6: [] });

const [filters, setFilters] = useState({ mod350: [], mod8000: [], mod20002: [] });
  const [filteredData, setFilteredData] = useState([]);
  const [options, setOptions] = useState({ mod350: [], mod8000: [], mod20002: [] });


  useEffect(() => {
    setFilteredData(data);
    setOptions(getAvailableOptions(data, filters));
  }, []);

  useEffect(() => {
    const newData = filterData(data, filters);
    setFilteredData(newData);
    setOptions(getAvailableOptions(data, filters));
  }, [filters]); 

  const handleFilterChange = (column, values) => {
    setFilters(prev => ({ ...prev, [column]: values }));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {['mod350', 'mod8000', 'mod20002', ].map(col => (
          <FilterDropdown
            key={col}
            column={col}
            options={options[col]}
            selected={filters[col]}
            onChange={handleFilterChange}
            // onSearch = {filters[col]}
          />
        ))}
      </div>
      <DataTableWrapper data={filteredData} />
    </div>
  );
};

export default FilterTable;