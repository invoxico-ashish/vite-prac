import React from "react";
import "./ResultSearch.css";

function ResultSearch({ result }) {
  return (
    <div
      className="resultSearch"
      onClick={(e) => alert(`you have clicked on ${result.name}`)}
    >
      {result.name}
    </div>
  );
}

export default ResultSearch;
