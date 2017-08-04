import React, { Component } from 'react';
import Socials from '../components/Socials';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Socials />
        <div className="text-center">
          &copy; SiteName - all rights reserved
        </div>
      </footer>
    );
  }
};

export default Footer;
