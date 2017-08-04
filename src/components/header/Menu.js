import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import '../../styles/header.css';

const Menu = (props) => {
  const items = props.items
    ? props.items.map(item => {
      const { link, title } = item;
      return <NavItem href={link} key={title}>{title}</NavItem>
    })
    : null

  return (
    <Nav className="main-menu" pullRight>
      {items}
      <NavItem href="#" className="authBtn">Sign Up</NavItem>
      <NavItem href="#" className="authBtn">Login</NavItem>
    </Nav>
  );
};

export default Menu;