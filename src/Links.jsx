import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  display:'block',
  textDecoration: 'none',
  padding: '10px',
  margin: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
};

function Links() {
  return (
    <div className="appcontainer">
      <Link to="/two" style={linkStyle}>
        Go to Two
      </Link>
      <Link to="/fifth" style={linkStyle}>
        Go to Fifth
      </Link>
      <Link to="/fourth" style={linkStyle}>
        Go To Fourth
      </Link>
      <Link to="/Seventh" style={linkStyle}>
        Go to Seventh
      </Link>
      <Link to="/eighth" style={linkStyle}>
        Go to Eighth
      </Link>
      <Link to="/nineth" style={linkStyle}>
        Go to Nineth
      </Link>
      <Link to="/Eleventh" style={linkStyle}>
        Go to Eleventh
      </Link>
      <Link to="/Twelveth" style={linkStyle}>
        Go to Twelveth
      </Link>
    </div>
  );
}

export default Links;
