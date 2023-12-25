import { useContext } from "react";
import Cdata from "./Cdata";
import "./Contact.css";
import { colorTemContext } from "../context/TemColorContext";

const Contact = () => {
  const {colors} = useContext(colorTemContext);
  return (
    <>
      <section className={`${colors.backColor + "a"} pt-5 pb-5`} id="contact">
        <div className="contact-inner container">
          <div className="contact-left">
            <h2 className="text-left">Let's get in touch</h2>
            <p>
            I am excited to connect and explore potential collaborations. As an avid React developer, I'm very excited about the possibilities ahead. Whether you have a project in mind, need help with your development needs, or just want to discuss ideas, I'm here and ready to dive in.
Get in touch with me through the contact information provided. Let's start a journey of innovation and creativity together. I can't wait to share my skills and expertise to bring your projects to life. We look forward to starting this exciting collaboration!
            </p>
            <div className="contact__container">
              {Cdata.map((contact) => (
                <a className={`${ colors.backColor+"b"} ${colors.primaryColor+"c"} `} key={contact.id} href={contact.link} >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-right">
            <h2 className="text-left" >Feel Free to fill the form</h2>
            <div className="contact-form">
              <form
                  action="https://formspree.io/f/xzbnpwja"
                  method="POST"
                className="contact-inputs"
              >
                <label htmlFor="name">What is your name</label>
                <input className={`${colors.backColor+"b"}`} type="text" name="name" autoComplete="off" required />
                <label htmlFor="email">Your favorite email address</label>
                <input className={`${colors.backColor+"b"}`}  type="email" name="email" autoComplete="off" required />
                <label htmlFor="message">How can I help you?</label>
                <textarea
                className={`${colors.backColor+"b"}`} 
                  name="message"
                  cols="20"
                  rows="4"
                  autoComplete="off"
                  required
                ></textarea>

                <input  type="submit" value="Send" className={`btn primary ${colors.primaryColor}`} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
