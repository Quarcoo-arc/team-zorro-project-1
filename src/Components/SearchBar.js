import React, { useState } from "react";

function SearchBar() {
  const [heading, setHeading] = useState(
    <img src="/images/side hustle.png" width="200px" alt="" />
  );

  let newInputValue;

  const updateInputValue = (event) => {
    newInputValue = event.target.value;
  };

  const handleFormSubmit = (event) => {
    const newHeading = newInputValue;

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
          <input type="search" onChange={updateInputValue}></input>
          <button onClick={handleFormSubmit} type="submit">
            <img src="/images/iconmonstr-search-thin.svg" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
