import React from "react";

const Quote = ({ quoteData }) => {
  const { quote, author } = quoteData;
  return (
    <div className="quote">
      <div className="quote-text">
        <span className="quotation">"</span>
        {quote}
        <span className="quotation">"</span>
      </div>
      <div className="quote-author">- {author}</div>
    </div>
  );
};

export default Quote;
