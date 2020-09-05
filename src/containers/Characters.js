import React, { useEffect, useState } from "react";
import Heading from "../components/UI/Heading";
import Loader from "react-loader-spinner";
import Axios from "axios";
import CharacterList from "../components/Characters/CharacterList";
import SearchCharacters from "../components/Characters/SearchCharacters";
import Pagination from "../components/UI/Pagination";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const req = await Axios.get(
          "https://www.breakingbadapi.com/api/characters"
        );
        const charactersData = req.data;
        setCharacters(charactersData);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCharacters();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);
  useEffect(() => {
    setCurrentIndex(1);
  }, [searchText]);
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const maxValue = Math.ceil(filteredCharacters.length / 5);
  const paginatedData = filteredCharacters.filter((data, index) => {
    if (currentIndex === 1) return index < 5 && data;
    const lowerLimit = (currentIndex - 1) * 5;
    const upperLimit = currentIndex * 5 + 1;
    return index > lowerLimit && index < upperLimit && data;
  });
  return (
    <div className="characters">
      <Heading title="Characters" />
      {isLoading && (
        <div className="loader">
          <Loader type="Oval" color="#068817" height={60} width={60} />
        </div>
      )}
      {!isLoading && (
        <>
          <SearchCharacters
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CharacterList characters={paginatedData} />
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

export default Characters;
