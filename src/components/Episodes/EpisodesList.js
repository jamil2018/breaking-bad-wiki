import React from "react";
import Season from "./Season";

const EpisodesList = ({ episodes }) => {
  const seasons = [];
  episodes.forEach((episode) => {
    !seasons.includes(episode.season.trim()) &&
      seasons.push(episode.season.trim());
  });
  const seasonEpisodes = seasons.map((season) =>
    episodes.filter((episode) => episode.season.trim() === season)
  );
  const seasonElements = seasonEpisodes.map((seasonEpisode, index) => (
    <Season
      seasonTitle={`Season ${index + 1}`}
      episodes={seasonEpisode}
      key={index}
    />
  ));
  return <div className="episodesList">{seasonElements}</div>;
};

export default EpisodesList;
