import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: 600,
    color: '#333'
  };

  const activeStyle = {
    color: '#007bff',
    borderBottom: '2px solid #007bff'
  };

  return (
    <nav style={{ marginBottom: '20px', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={linkStyle} end activeStyle={activeStyle}>All Tasks</NavLink>
      <NavLink to="/pending" style={linkStyle} activeStyle={activeStyle}>Pending</NavLink>
      <NavLink to="/completed" style={linkStyle} activeStyle={activeStyle}>Completed</NavLink>
      <NavLink to="/add" style={linkStyle} activeStyle={activeStyle}>Add Task</NavLink>
    </nav>
  );
};

export default Navbar;
