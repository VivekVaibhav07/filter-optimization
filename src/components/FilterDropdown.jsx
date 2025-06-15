import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

const FilterDropdown = ({ column, options, selected, onChange }) => {
  const handleChange = selectedList => {
    onChange(column, selectedList.map(item => item.value));
  };

  const selectOptions = options.map(val => ({ name: val.toString(), value: val }));
  const selectedValues = selected.map(val => ({ name: val.toString(), value: val }));

  return (
    <Multiselect
      options={selectOptions}
      selectedValues={selectedValues}
      onSelect={handleChange}
      onRemove={handleChange}
      displayValue="name"
      showCheckbox
      placeholder={`Filter ${column}`}
    //   onSearch={selectOptions}
    />
  );
};

export default FilterDropdown;
