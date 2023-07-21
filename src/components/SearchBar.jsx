import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

function SearchBAr({ setResult }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResult(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrraper">
      <AiOutlineSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBAr;
