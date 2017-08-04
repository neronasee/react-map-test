import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Company from '../components/companies/Company';
import SectionTitle from '../components/SectionTitle';

const mockCompanies = [
  'http://via.placeholder.com/400x200',
  'http://via.placeholder.com/400x200',
  'http://via.placeholder.com/400x200',
  'http://via.placeholder.com/400x200',
  'http://via.placeholder.com/400x200',
  'http://via.placeholder.com/400x200',
]

class Companies extends Component {
  renderCompanies() {
    return mockCompanies.map((company, index) => {
      return <Company key={`${company}${index}`} src={company} />
    })
  }

  render() {
    return (
      <ScrollableAnchor id={"companiesSection"}>
        <Row>
          <SectionTitle text="FEATURED COMPANIES" />
          {this.renderCompanies()}
        </Row>
      </ScrollableAnchor>

    );
  }
};

export default Companies;