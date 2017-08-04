import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/socials.css';

const Socials = () => {
  return (
    <div className="text-center socials">
      <a href="">
        <FontAwesome
          className="fb"
          name='facebook-square'
          size='2x'
        />
      </a>
      <a href="">
        <FontAwesome
          className="tw"
          name='twitter'
          size='2x'
        />
      </a>
      <a href="">
        <FontAwesome
          className="ig"
          name='instagram'
          size='2x'
        />
      </a>
      <a href="">
        <FontAwesome
          className="in"
          name='linkedin-square'
          size='2x'
        />
      </a>
      <a href="">
        <FontAwesome
          className="pt"
          name='pinterest'
          size='2x'
        />
      </a>
    </div>
  );
};

export default Socials;
