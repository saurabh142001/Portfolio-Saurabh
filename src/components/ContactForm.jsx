import React, { useState } from "react";
import "../styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setFormStatus("success"), 1000); // Simulate form submission
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-component">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-subtext">We'd love to hear from you!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-field-wrapper">
            <label htmlFor="firstName" className="contact-label">
              Name
            </label>
            <div className="name-inputs-container">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="input"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="input"
                placeholder="Last Name"
              />
            </div>
          </div>

          {["email", "phone", "subject"].map((field) => (
            <div className="contact-field-wrapper" key={field}>
              <label htmlFor={field} className="contact-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="input"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}

          <div className="contact-field-wrapper">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="input message-input"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="button">
            Submit
          </button>

          {formStatus === "success" && (
            <div className="success-message">
              Thank you! Your submission has been received!
            </div>
          )}
          {formStatus === "error" && (
            <div className="error-message">
              Oops! Something went wrong while submitting the form.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
