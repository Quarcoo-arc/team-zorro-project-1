import React from "react";

function Header(props) {
  return (
    <div className="header">
      <ul className="links">
        <li>
          <a href="#">Gmail</a>
        </li>
        <li>
          <a href="#">Images</a>
        </li>
        <li>
          <a href="#">
            <img
              className="profile-pic"
              src="/profile.jpg"
              width="36px"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
