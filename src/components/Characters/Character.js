import React from "react";

const Character = ({ characterData }) => {
  const {
    name,
    birthday,
    occupation,
    img,
    status,
    appearance,
    nickname,
    portrayed,
  } = characterData;
  return (
    <div className="character-card">
      <img src={img} alt="character-img" className="character-img" />
      <div className="character-details">
        <div className="character-title">{name}</div>

        <div className="detail-group">
          <span className="detail-title">Birthday:</span>
          <span className="detail-data">{birthday}</span>
        </div>
        <div className="detail-group">
          <span className="detail-title">Occupation:</span>
          <span className="detail-data">{occupation.join(" , ")}</span>
        </div>
        <div className="detail-group">
          <span className="detail-title">Status:</span>
          <span className="detail-data">{status}</span>
        </div>
        <div className="detail-group">
          <span className="detail-title">Appearance:</span>
          <span className="detail-data">{appearance.join(" , ")}</span>
        </div>
        <div className="detail-group">
          <span className="detail-title">Nickname:</span>
          <span className="detail-data">{nickname}</span>
        </div>
        <div className="detail-group">
          <span className="detail-title">Portrayed by:</span>
          <span className="detail-data">{portrayed}</span>
        </div>
      </div>
    </div>
  );
};

export default Character;
