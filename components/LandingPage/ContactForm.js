import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [onLoading, setOnLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (_, event) => {
    event.preventDefault();
    try {
      setOnLoading(true);
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      await axios.post(url, payload);
      setContact(INITIAL_STATE);
      alertContent();
      setOnLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="contact-area border-bottom pt-100 pb-70">
      <div className="common-right-text">
        <span>CONTACT</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">CONTACT</span>
          <h2>
            Have You Any <span>Project?</span> Please Drop A Message
          </h2>
          {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p> */}
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={contact.name}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.name && "Name is required."}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={contact.email}
                  onChange={handleChange}
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.email && "Email is required."}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={contact.subject}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.subject && "Subject is required."}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  className="form-control"
                  placeholder="Phone"
                  value={contact.number}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.number && "Number is required."}
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="text"
                  className="form-control"
                  cols="30"
                  rows="6"
                  placeholder="Write message"
                  value={contact.text}
                  onChange={handleChange}
                  ref={register({ required: true })}
                />
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.text && "Text body is required."}
                </div>
              </div>

              <button
                disabled={onLoading}
                type="submit"
                className="btn common-btn"
              >
                Send Message <span></span>
              </button>
            </form>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="contact-content">
              <div className="top">
                <ul>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+00932123456">+409 217 5518</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:hello@reton.com">
                      brandongalli32@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>Website:</span>
                    <a href="#" target="_blank">
                      www.brandongalli.com
                    </a>
                  </li>
                  <li>
                    <span>Address:</span>
                    <a href="#" target="_blank">
                      Seattle, WA, 98102, United States
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bottom">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100089644460850"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/brandongalli32"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/brandongalli32"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.github.com/brandongalli"
                      target="_blank"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
