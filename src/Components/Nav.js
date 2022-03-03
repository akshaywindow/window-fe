import React from 'react';
// import { Link } from "react-router-dom";

const Nav= () => {
  return (
    <div className="nav">
      <div>
        <a className="window_logo" href='/'>window</a>
      <div className="profile">profile</div>
      {/* <li>
        <Link to="/">Window</Link>
      </li> */}
      </div>
    </div>
  );
}

export default Nav;