import React from 'react';
import FilterTable from './components/FilterTable';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Filter Table Optimization</h1>
      <ErrorBoundary>
        <FilterTable />
      </ErrorBoundary>
    </div>
  );
};

export default App ;