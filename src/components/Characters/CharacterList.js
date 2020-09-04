import React from "react";
import Character from "./Character";

const CharacterList = ({ characters }) => {
  const charactersElements = characters.map((character) => (
    <Character key={character.char_id} characterData={character} />
  ));
  return <div className="character-cards-container">{charactersElements}</div>;
};

export default CharacterList;
