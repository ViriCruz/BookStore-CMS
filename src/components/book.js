import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { bookId, title, category } = book;

  return (
    <tr>
      <td>{ bookId }</td>
      <td>{ title }</td>
      <td>{ category }</td>
    </tr>
  );
};

Book.defaultProps = {
  book: {
    bookId: 1,
    title: 'Learning Redux',
    category: 'Learning',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};

export default Book;
