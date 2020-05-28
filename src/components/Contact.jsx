import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="page">
        <div class="header"> CONTACT FORM </div>

        <form class="form">
          <input
            name="name"
            type="text"
            class="name feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            class="email feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            class="message feedback-input"
            placeholder="Message"
          ></textarea>
          <input class="submit-button" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
