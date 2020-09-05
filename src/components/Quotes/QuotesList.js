import React from "react";
import Quote from "./Quote";

const QuotesList = ({ quotes }) => {
  const quoteElements = quotes.map((quote) => (
    <Quote quoteData={quote} key={quote.quote_id} />
  ));
  return <div className="quotestList">{quoteElements}</div>;
};

export default QuotesList;
