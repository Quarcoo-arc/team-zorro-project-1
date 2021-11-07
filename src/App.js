import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <SearchBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
