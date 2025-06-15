import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'Number', selector: row => row.number, sortable: true },
  { name: 'mod350', selector: row => row.mod350, sortable: true },
  { name: 'mod8000', selector: row => row.mod8000, sortable: true },
  { name: 'mod20002', selector: row => row.mod20002, sortable: true },
//   { name: 'mod6', selector: row => row.mod6, sortable: true },
];

const DataTableWrapper = ({ data }) => (
  <DataTable
    columns={columns}
    data={data}
    pagination
    paginationPerPage={100}
     fixedHeader
    fixedHeaderScrollHeight="400px"
  />
);

export default DataTableWrapper;