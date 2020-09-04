import React from "react";
import Episode from "./Episode";

const Season = ({ seasonTitle, episodes }) => {
  const episodeElements = episodes.map((episode) => (
    <Episode episodeData={episode} key={episode.episode_id} />
  ));
  return (
    <div className="season">
      <h2 className="season-title">{seasonTitle}</h2>
      <div className="episodes">{episodeElements}</div>
    </div>
  );
};

export default Season;
