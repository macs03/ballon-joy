import React from "react";
import useForm from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import emailJs from "emailjs-com";

import "./styles.css";

import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import whatsapp from "../../assets/images/icon-whatsapp.svg";
import email from "../../assets/images/icon-email.svg";

const userID = "user_XhWjzmKsGW4hcx0ogon6e";
const serviceID = "gmailtest";
const templateID = "template_ziReR0i8";

const Contact = () => {
  // Init service for email
  emailJs.init(userID);

  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const { addToast } = useToasts(); // Initialise toast

  const onSubmit = (data, event) => {
    const template_params = {
      reply_to: data.email,
      subject: data.subject,
      from_name: data.fullname,
      to_name: "Balloon Joy",
      cell_phone: data.phone,
      message_html: data.message,
      date: data.date
    };

    emailJs.send(serviceID, templateID, template_params).then(
      response => {
        addToast("Your Message has been send", {
          appearance: "success",
          autoDismiss: true
        });
        event.target.reset();
      },
      error => {
        addToast("Somenthing went wrong", {
          appearance: "error",
          autoDismiss: true
        });
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="social">
        <span className="contact-title">Contact us</span>
        <div className="social-content">
          <div className="phone">
            <span className="contact-info">+1 (313) 335-2019</span>
            <LazyLoadImage
              alt="whatsapp"
              height="25px"
              src={whatsapp}
              width="25px"
              effect="blur"
              className="whatsapp"
            />
          </div>
          <div className="address">
            <span className="contact-info">Detroit, Michigan</span>
            <span className="contact-info">USA</span>
          </div>
          <div className="social-network">
            <LazyLoadImage
              alt="whatsapp"
              height="25px"
              src={facebook}
              width="25px"
              effect="blur"
            />
            <LazyLoadImage
              alt="whatsapp"
              height="25px"
              src={instagram}
              width="25px"
              effect="blur"
            />
            <LazyLoadImage
              alt="whatsapp"
              height="25px"
              src={twitter}
              width="25px"
              effect="blur"
            />
          </div>
        </div>
      </div>
      <div className="contact-form">
        <span className="contact-title">
          Would you like make an event? Please, write us
        </span>
        <span className="contact-title">
          Email and Text message is the BEST way to reach us!
        </span>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} id="form">
            <input
              name="fullname"
              placeholder="Full Name"
              ref={register({ required: true })}
            />
            {errors.fullname && (
              <span className="contact-title">Full name is required.</span>
            )}
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
              })}
            />
            {errors.email && (
              <span className="contact-title">E-mail is required.</span>
            )}
            <input
              name="subject"
              placeholder="Subject"
              ref={register({ required: true })}
            />
            {errors.subject && (
              <span className="contact-title">Subject is required.</span>
            )}
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              ref={register({ pattern: /\d+/, required: true })}
            />
            {errors.phone && (
              <span className="contact-title">
                Please enter number for phone.
              </span>
            )}

            <input
              name="date"
              type="date"
              placeholder="Date"
              ref={register({ required: true })}
            />
            {errors.phone && (
              <span className="contact-title">
                Please enter an estimate date.
              </span>
            )}
            <textarea
              name="message"
              form="form"
              placeholder="Message"
              maxLength={200}
              rows="10"
              ref={register({
                required: true,
                maxlength: 200,
                minLength: 20
              })}
            />
            {errors.message && (
              <span className="contact-title">
                Please enter your message, with at least 20 characters
              </span>
            )}
            <button className="primary-button" type="submit">
              <LazyLoadImage
                alt="email"
                height="30%"
                src={email}
                width="30%"
                effect="blur"
              />
              <span className="button-text">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
