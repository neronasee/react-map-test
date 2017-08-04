import React, { PureComponent } from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import SectionTitle from './SectionTitle';
import '../styles/work.css';

class Work extends PureComponent {
  render() {
    return (
      <ScrollableAnchor id={'workSection'}>
        <Row className="work" id="work">
          <SectionTitle text="HOW WE WORK" />
          <Col xs={12} md={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh at libero condimentum blandit sit amet et lacus. Aliquam ultrices, ante ac feugiat ultricies, nisi erat ornare dolor, ut facilisis augue arcu at erat. Nulla facilisi. Duis posuere lorem vitae nibh convallis, id pellentesque nibh euismod. Suspendisse malesuada arcu maximus molestie convallis. Suspendisse sagittis magna sed velit sodales, quis varius urna ornare. Proin sit amet nulla vitae tortor mollis varius. Integer sit amet turpis risus.
          Curabitur euismod ex id orci hendrerit maximus. Nullam est dui, blandit et nunc a, volutpat malesuada enim. Aliquam erat volutpat. Quisque sit amet velit lorem. Mauris posuere ac magna quis aliquet. Phasellus nunc lacus, molestie et lorem quis, accumsan eleifend neque. Fusce auctor finibus est. Phasellus pharetra fermentum turpis pellentesque vulputate. Nulla vestibulum vel tellus vitae sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent maximus nec nibh et varius. Proin sed nunc auctor elit gravida gravida aliquet ac tortor.
        </Col>
          <Col xs={12} md={5}>
            <ResponsiveEmbed a4by3>
              <iframe
                src={'https://player.vimeo.com/video/20732587?color=969696'}
                allowFullScreen
                title="cats video"
              />
            </ResponsiveEmbed>
          </Col>
        </Row>
      </ScrollableAnchor>
    );
  }
};

export default Work;
