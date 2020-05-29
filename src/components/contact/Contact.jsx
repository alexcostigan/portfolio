import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <div>
      <div className="page">
        <div className="header"> CONTACT FORM </div>

        <form className="form">
          <input
            name="name"
            type="text"
            className="name feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="email feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            className="message feedback-input"
            placeholder="Message"
          >
            
          </textarea>
          <input className="submit-button" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
