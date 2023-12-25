import { useContext } from "react";
import { links, socials } from "./Fdata";
import "./Footer.css";
import { colorTemContext } from "../../context/TemColorContext";


const Footer = () => {
  
  const {colors} = useContext(colorTemContext);
  return (
    <>
      <footer className={`${colors.primaryColor}`}>
        <div className={` container footer__container `}>
          <ul className="d-none d-md-flex nav__menu">
            {links.map((fLink) => (
              <li key={fLink.id}>
                <a href={fLink.link}>{fLink.title}</a>
              </li>
            ))}
          </ul>
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.id} href={social.link} >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__copyright">
          <small>&copy; 2023-25 Samaneh Azhar | All Rights Reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
