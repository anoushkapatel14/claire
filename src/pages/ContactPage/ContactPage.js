import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Header from "../../components/Header/Header";
import FooterNav from "../../components/FooterNav/FooterNav";
import "./ContactPage.scss";
import claire2 from "../../assets/images/claire-contact-desktop.png";
import FooterNavMobileWhite from "../../components/FooterNavMobileWhite/FooterNavMobileWhite";

export default function ContactPage() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const isFormValid = () => {
    if (!formData.user_name || !formData.user_email || !formData.message) {
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setSuccessMessage("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_e37y3vn",
        "template_npunzpp",
        form.current,
        "hbssdJ3ap2-fLdpAe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message successfully sent!");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <>
      <Header />
      <main className="contact">
        <div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <h1 className="form__title">Contact</h1>

            {/* <img className="mobile-img"
        src={claire} alt="Claire Ward" /> */}

            <p className="form__text">
              To book Claire for an event or to enquire about lessons please use
              the form below.
            </p>

            <label className="form__label">Name</label>
            <input
              className="form__input"
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={(e) =>
                setFormData({ ...formData, user_name: e.target.value })
              }
            />
            <label className="form__label">Email</label>
            <input
              className="form__input"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={(e) =>
                setFormData({ ...formData, user_email: e.target.value })
              }
            />
            <label className="form__label">Message</label>
            <textarea
              className="form__message-input"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <input className="form__button" type="submit" value="Send" />
          </form>
          {successMessage && (
            <p className="form__success-message">{successMessage}</p>
          )}
        </div>

        <div>
          <img
            className="contact__tablet-img"
            src={claire2}
            alt="Claire Ward"
          />
        </div>

        <FooterNavMobileWhite />
      </main>
      <FooterNav />
    </>
  );
}
