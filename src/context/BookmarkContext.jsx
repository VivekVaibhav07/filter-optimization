import React, { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export const useBookmarks = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedRows, setBookmarkedRows] = useState([]);

  const toggleBookmark = (row) => {
    setBookmarkedRows(prev =>
      prev.some(r => r.number === row.number)
        ? prev.filter(r => r.number !== row.number)
        : [...prev, row]
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedRows, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};