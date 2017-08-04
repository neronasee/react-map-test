import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Header from './containers/Header';
import Slider from './containers/Slider';
import Work from './components/Work';
import Companies from './containers/Companies';
import Map from './containers/Map';
import CallToAction from './components/CallToAction';
import Contacts from './containers/Contacts';
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Slider />
        <Work />
        <Companies />
        <Map />
        <CallToAction />
        <Contacts />
        <Footer />
      </Grid>
    );
  }
}

export default App;
