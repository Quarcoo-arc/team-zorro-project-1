import React, { useState } from "react";

function SearchBar() {
  const [heading, setHeading] = useState(
    <img src="/images/side hustle.png" width="200px" alt="" />
  );

  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const handleFormSubmit = (event) => {
    const newHeading = inputValue;
    setInputValue("");

    newHeading
      ? setHeading(newHeading)
      : setHeading(<img src="/images/side hustle.png" width="200px" alt="" />);

    event.preventDefault();
  };
  return (
    <div>
      <div>{heading}</div>
      <div>
        <form action="" method="" role="search">
          <input
            type="search"
            onChange={updateInputValue}
            value={inputValue}
          ></input>
          <button onClick={handleFormSubmit} type="submit">
            <img src="/images/iconmonstr-search-thin.svg" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
