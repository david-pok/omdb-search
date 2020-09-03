import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import Noms from "./components/noms";
import SearchResults from "./components/searchResults";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Noms />
      <SearchResults />
    </div>
  );
}

export default App;