import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className="appcontainer">
      <Link to="/two">Go to Two</Link>
      <Link to="/fifth">Go to Fifth</Link>
      <Link to = "/fourth">Go To Fourth</Link>
      <Link to = "/Seventh">Go to Seventh</Link>
      <Link to ="/eighth">Go to Eighth</Link>
    </div>
  );
}

export default Links;
