import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (props) => {
  return (
    <Alert bsStyle="danger">
      {props.text}
    </Alert>
  );
};

export default Error;