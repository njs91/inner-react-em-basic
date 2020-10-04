import React from 'react';
import Navlinks from '../../util/Navlinks';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const lis = Navlinks.map((link) => (
    <li key={link.href}>
      <NavLink exact activeClassName='active' to={link.href}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <div id='navbar'>
      <ul>{lis}</ul>
    </div>
  );
};

export default Navbar;
