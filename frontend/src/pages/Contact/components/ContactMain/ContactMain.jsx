import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

import "./ContactMain.css";

function ContactMain() {
  return (
    <section className="contact-main">
      <div className="contact-main-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactMain;
