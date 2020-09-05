import React from "react";
import Heading from "../components/UI/Heading";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import SearchQuotes from "../components/Quotes/SearchQuotes";
import Loader from "react-loader-spinner";
import QuotesList from "../components/Quotes/QuotesList";
import Pagination from "../components/UI/Pagination";

const Quotes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    const getQuotes = async () => {
      try {
        setIsLoading(true);
        const req = await Axios.get(
          "https://www.breakingbadapi.com/api/quotes"
        );
        const quotesData = req.data;
        setQuotes(quotesData);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    getQuotes();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);
  useEffect(() => {
    setCurrentIndex(1);
  }, [searchText]);
  const filteredQuotes = quotes.filter(
    (quoteItem) =>
      quoteItem.quote.toLowerCase().includes(searchText.toLowerCase()) ||
      quoteItem.author.toLowerCase().includes(searchText.toLowerCase())
  );
  const maxValue = Math.ceil(filteredQuotes.length / 5);
  const paginatedData = filteredQuotes.filter((data, index) => {
    if (currentIndex === 1) return index < 5 && data;
    const lowerLimit = (currentIndex - 1) * 5;
    const upperLimit = currentIndex * 5 + 1;
    return index > lowerLimit && index < upperLimit && data;
  });
  return (
    <div>
      <Heading title="Quotes" />
      {isLoading && (
        <div className="loader">
          <Loader type="Oval" color="#068817" height={60} width={60} />
        </div>
      )}
      {!isLoading && (
        <>
          <SearchQuotes searchText={searchText} setSearchText={setSearchText} />
          <QuotesList quotes={paginatedData} />
          <Pagination
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            maxValue={maxValue}
          />
        </>
      )}
    </div>
  );
};

export default Quotes;
