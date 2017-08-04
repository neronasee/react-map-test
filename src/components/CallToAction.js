import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/callToAction.css';

class CallToAction extends PureComponent {
  render() {
    return (
      <Row className="callToAction">
        <Col xs={12} md={10} className="text-center">
          <h4>Start Building Your Own Profile Now</h4>
        </Col>
        <Col xs={12} md={2} className="text-center">
          <a href="" className="btn btn-lg btn-primary">Get Started</a>
        </Col>
      </Row>
    );
  }
};

export default CallToAction;
