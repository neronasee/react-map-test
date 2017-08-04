import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Slide from '../components/slider/Slide';

import '../styles/slider.css';

const mockSlidesData = [
  { 
    caption: "Extending your team?", 
    descr: "Find a perfect match", 
    img: "http://via.placeholder.com/1500x500"
  },
  { 
    caption: "Extending team?", 
    descr: "Find a perfect match", 
    img: "http://via.placeholder.com/1500x500"
  },
  { 
    caption: "Extending your?", 
    descr: "Find a perfect match", 
    img: "http://via.placeholder.com/1500x500"
  },
]

class Slider extends Component {
  renderSlides () {
    return mockSlidesData.map(slide => <Slide key={slide.caption} data={slide}/>)
  }

  render() {
    return (
      <Carousel className="slider">
        {this.renderSlides()}
      </Carousel>
    );
  }
};

export default Slider;