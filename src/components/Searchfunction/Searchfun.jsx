import React, { useState } from "react";
import "./Searchfun.css";
import { Users } from "./User";
import Table from "./Table";

const Searchfun = () => {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={Search(Users)} />
    </div>
  );
};

export default Searchfun;
