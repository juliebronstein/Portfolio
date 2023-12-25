import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import About from "./Components/About/About.jsx";
import { colorTemContext } from "./context/TemColorContext";
import Skills from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./Components/Footer/Footer";
import FloatingNav from "./Components/FloatingNav/FloatingNav";
import ScrollspyNav from "react-scrollspy-nav";

import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { SiReact } from "react-icons/si";
import classNames from 'classnames';

const scrollTargetIds = ["home", "about", "skills", "portfolio", "contact"];
// const scrollTargetIds = [ "about", "contact"];

// Component that renders the scroll target elements
const ScrollTargetComponent = ({ colors }) => {
  return (
    // <div className={`${colors.backColor + "b"}`}>
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
</>
    // </div>
  );
};

export const Home = () => {
  const { colors } = useContext(colorTemContext);
  const activeNavClass = classNames('is-active', `${colors.primaryColor}c`);

  return (
    <>
      <ScrollspyNav
        scrollTargetIds={scrollTargetIds}
        offset={-100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
        // currentClassName=
      >
        {/* Navigation links */}
      

      <ul className={`${colors.backColor+"bf"} col-12  d-flex flex-row justify-content-center floating__nav d-lg-none `}>
          <li>
            <a href="#home">
              <AiFillHome />
            </a>
          </li>
          <li>
            <a href="#about">
              <BsPersonFill />
            </a>
          </li>
          <li>
            <a href="#skills">
              <SiReact />
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <AiFillAppstore />
            </a>
          </li>
          <li>
            <a href="#contact">
              <AiFillMessage />
            </a>
          </li>
        </ul>

      </ScrollspyNav>

      <ScrollTargetComponent colors={colors} />
    </>
  );
};
