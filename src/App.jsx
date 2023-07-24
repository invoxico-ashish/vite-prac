import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Searchresult from "./components/Searchresult";
import Searchfun from "./components/Searchfunction/Searchfun";

function App() {
  const [results, setResult] = useState([]);

  return (
    // <div className="App">
    //   {/* <div className="search-bar-container">
    //     <SearchBar setResult={setResult} />
    //     <Searchresult results={results} />
    //   </div> */}

    // </div>
    <Searchfun />
  );
}

export default App;
