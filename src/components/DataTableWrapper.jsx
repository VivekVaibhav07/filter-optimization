
import React from 'react';
import DataTable from 'react-data-table-component';
import { useBookmarks } from '../context/BookmarkContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

const DataTableWrapper = ({ data }) => {
  const { bookmarkedRows, toggleBookmark } = useBookmarks();
  
  const columns = [
    { name: 'Number', selector: row => row.number, sortable: true },
    { name: 'mod350', selector: row => row.mod350, sortable: true },
    { name: 'mod8000', selector: row => row.mod8000, sortable: true },
    { name: 'mod20002', selector: row => row.mod20002, sortable: true },
    {
      name: 'Bookmark',
      cell: row => (
        <button
          onClick={() => toggleBookmark(row)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: bookmarkedRows.some(r => r.number === row.number) ? '#f39c12' : '#555'
          }}
          title={bookmarkedRows.some(r => r.number === row.number) ? 'Remove Bookmark' : 'Add Bookmark'}
        >
          <FontAwesomeIcon
            icon={
              bookmarkedRows.some(r => r.number === row.number)
                ? solidBookmark
                : regularBookmark
            }
          />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage={100}
      paginationRowsPerPageOptions={[100]}
      fixedHeade
      fixedHeaderScrollHeight="400px"
    />
  );
};

export default DataTableWrapper;
