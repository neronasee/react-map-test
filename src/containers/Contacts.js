import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import ContactForm from '../components/contacts/ContactForm';
import ContactInfo from '../components/contacts/ContactInfo';
import '../styles/contacts.css';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    /* submitting stuff */
  }

  render() {
    return (
      <ScrollableAnchor id={"contactsSection"}>
        <Row className="contacts">
          <Col xs={12} md={8}>
            <ContactForm
              formSubmitHandler={this.handleSubmit}
            />
          </Col>
          <Col xs={12} mdOffset={1} md={3}>
            <ContactInfo />
          </Col>
        </Row>
      </ScrollableAnchor>

    );
  }
};

export default Contacts;
