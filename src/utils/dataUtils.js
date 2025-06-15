export const filterData = (data, filters) => {
  return data.filter(row => {
    return Object.entries(filters).every(([key, values]) => {
      return values.length === 0 || values.includes(row[key]);
    });
  });
};

export const getAvailableOptions = (data, currentFilters) => {
  const newOptions = {};
  ['mod350', 'mod8000', 'mod20002', ].forEach(col => {
    const filtered = data.filter(row => {
      return Object.entries(currentFilters).every(([key, values]) => {
        if (key === col) return true;
        return values.length === 0 || values.includes(row[key]);
      });
    });
    newOptions[col] = [...new Set(filtered.map(d => d[col]))];
  });
  return newOptions;
};