import React, { useState } from "react";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { SearchBox } from "./SearchBox";
import { MovieResults } from "./MovieResults";

function App() {
  const [query, setQuery] = useState("");

  const onChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <SearchBox onChange={onChange}></SearchBox>
      <MovieResults query={query}></MovieResults>
    </div>
  );
}

export default App;
