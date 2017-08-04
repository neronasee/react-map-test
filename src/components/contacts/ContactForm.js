import React, { PureComponent } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import Error from '../Error';
import { emailIsValid } from '../../utils/validation';

class ContactForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      emailErr: false,
      submitErr: false,
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    if (e.target.value && !emailIsValid(e.target.value)) {
      this.setState({ emailErr: true });
    } else {
      this.setState({ emailErr: false });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.formName.value || !this.formEmail.value || !this.formMessage.value || this.state.emailErr) {
      this.setState({ submitErr: true });
      return;
    }

    this.setState({ submitErr: false });

    this.props.formSubmitHandler();
  }

  render() {
    const emailErr = this.state.emailErr ? <Error text="Enter a valid email" /> : null;
    const submitErr = this.state.submitErr ? <Error text="Fill all the fields and check for occurred errors" /> : null;

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <h3>DROP US A LINE</h3>
        <FormGroup>
          <FormControl 
            inputRef={ref => { this.formName = ref; }}
            type="name" 
            placeholder="Name" 
          />
        </FormGroup>
        <FormGroup>
          <FormControl 
            inputRef={ref => { this.formEmail = ref; }}
            onChange={this.handleEmailChange} 
            type="text" 
            placeholder="Email" 
          />
        </FormGroup>
        {emailErr}
        <FormGroup>
          <FormControl 
            inputRef={ref => { this.formMessage = ref; }} 
            componentClass="textarea" 
            placeholder="Message" 
          />
        </FormGroup>
        <FormGroup>
          {submitErr}
          <Button type="submit">
            Send
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default ContactForm;

