import React from 'react';

const ContactInfo = (props) => {
  return (
    <div>
      <h3>VISIT OUR OFFICE</h3>
      <div>

        <address>
          <b>NEW YORK</b><br />
          5 Park Avenue<br />
          New York, NY 10016<br />
          USA
				</address>

        <p>
          <a href="tel:+17182425555">+1 718.242.5555</a><br />
          <a href="tel:+17182425556">+1 718.242.5556</a><br />
          <a href="mailto:ny@jobseek.com">ny@jobseek.com</a>
        </p>

        <p className="contact-time">
          <span>Mon-Fri 9am - 5pm</span>
          <span>Sat 10am - 2pm</span>
          <span>Sun Closed</span>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
