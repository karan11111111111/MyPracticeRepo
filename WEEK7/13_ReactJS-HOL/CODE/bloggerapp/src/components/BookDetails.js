import React from 'react';

function BookDetails(props) {
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}> {/* Key prop is important for lists [cite: 31] */}
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
  return (
    <div className="st2">
      <h1>Book Details</h1>
      {bookdet}
    </div>
  );
}

export default BookDetails;
