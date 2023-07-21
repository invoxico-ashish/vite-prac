import React from "react";
import "./SearchResult.css";
import ResultSearch from "./ResultSearch";

function Searchresult({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <ResultSearch result={result} key={id} />;
      })}
    </div>
  );
}

export default Searchresult;
