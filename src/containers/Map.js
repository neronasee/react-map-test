import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import debounce from 'lodash.debounce';
import data from '../data.json';
import '../styles/map.css';
import mapHelper from '../utils/map';

const mapDrawer = mapHelper(data);

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.debouncedRedraw = debounce(mapDrawer.reDrawMap, 500);
  }

  componentDidMount() {
    mapDrawer.init();
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value }, () => {
      this.debouncedRedraw(+this.state.inputValue);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <SectionTitle text="WORLD POPULATION MAP" />

        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup>
            <ControlLabel>Population</ControlLabel>
            <FormControl
              type="text"
              placeholder="Desired population"
              value={this.state.inputValue}
              name="val"
              onChange={this.handleInputChange}
            />
          </FormGroup>
        </Form>
        <div className="map" id="container"></div>
      </div>
    );
  }
};

export default Map;
