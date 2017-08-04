import React from 'react';
import { Image, Col } from 'react-bootstrap';
import '../../styles/companies.css';

const Company = (props) => {
  return (
    <Col className="featured_company" sm={6} md={4}>
      <Image src={props.src} responsive/>
    </Col>
  );
};

export default Company;