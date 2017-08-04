import React from 'react';
import { Image } from 'react-bootstrap';

const Logo = (props) => {
  const imgSrc = props.img ? props.img : "http://placehold.it/100x80"

  return (
    <a href=""><Image src={imgSrc}/></a>
  )
};

export default Logo;
