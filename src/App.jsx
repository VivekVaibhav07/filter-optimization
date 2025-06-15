import React from 'react';
import FilterTable from './components/FilterTable';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-400">
      <h1 className="text-3xl font-bold text-center py-6">Filter Table Optimization</h1>
      <FilterTable />
    </div>
  );
};

export default App;