import React, { useState } from "react";
import Heading from "../components/UI/Heading";
import { useEffect } from "react";
import Axios from "axios";
import EpisodesList from "../components/Episodes/EpisodesList";
import Loader from "react-loader-spinner";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const req = await Axios.get(
          "https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad"
        );
        const episodesData = req.data;
        setEpisodes(episodesData);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Heading title="Episodes" />
      {isLoading && (
        <div className="loader">
          <Loader type="Oval" color="#068817" height={60} width={60} />
        </div>
      )}
      {!isLoading && <EpisodesList episodes={episodes} />}
    </div>
  );
};

export default Episodes;
