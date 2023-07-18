import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-left-content">
              <div className="contact-icon">
                <div className="icon-inner">
                  <AiOutlinePhone />
                </div>
                <h2>Call To Us</h2>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +20-10-900-7860</p>
            </div>
            <div className="contact-left-content border-top-contact">
              <div className="contact-icon">
                <div className="icon-inner">
                  <AiOutlineMail />
                </div>
                <h2>Write To Us</h2>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Email: alaadeen@gmail.com</p>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone" />
              <textarea type="text" placeholder="Message" />
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
