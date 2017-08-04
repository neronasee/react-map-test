import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = (props) => {
  const { data: { caption, descr, img }} = props;

  return (
    <Carousel.Item {...props}>
      <img alt={caption} src={img} />
      <Carousel.Caption>
        <h4>{caption}</h4>
        <p>{descr}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default Slide;
