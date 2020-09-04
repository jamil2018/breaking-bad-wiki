import React from "react";

const Pagination = ({ currentIndex, setCurrentIndex, maxValue }) => {
  const paginationButtonElements = [];
  for (let i = 0; i < maxValue; i++) {
    const buttonClasses = ["pagination-button"];
    if (i + 1 === currentIndex) {
      buttonClasses.push("active");
    }
    const button = (
      <div
        className={buttonClasses.join(" ")}
        key={i + 1}
        onClick={(e) => setCurrentIndex(i + 1)}
      >
        {i + 1}
      </div>
    );
    paginationButtonElements.push(button);
  }
  return <div className="pagination">{paginationButtonElements}</div>;
};

export default Pagination;
