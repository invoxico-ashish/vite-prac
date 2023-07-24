import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Searchfun.css";
import { Users } from "./User";
import Table from "./Table";

const Searchfun = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUser();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
};

export default Searchfun;
