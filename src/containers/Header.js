import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../components/header/Logo';
import Menu from '../components/header/Menu';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Menu
            items={[
              { title: 'How we work', link: '#workSection' },
              { title: 'Companies', link: '#companiesSection' },
              { title: 'Testimonials', link: '#' },
              { title: 'Contact Us', link: '#contactsSection' },
            ]}
          />
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Header;
