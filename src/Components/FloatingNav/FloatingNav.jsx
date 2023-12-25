

import ScrollspyNav from "react-scrollspy-nav";
import "./FloatingNav.css";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { SiReact } from "react-icons/si";

const FloatingNav = () => {
  return (
    <>
      <ul id="floating__nav d-flex d-lg-none">

    <ScrollspyNav
                    scrollTargetIds={["home", "about", "skills", "portfolio", "contact"]}
                    offset={0}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                    currentClassName="b"
                >
                  <ul className="d-flex flex-row"  >
                  <li><a href="home"><AiFillHome /></a></li>
                         <li><a href="#about"><BsPersonFill /></a></li>
                         <li><a href="#skills"><SiReact /></a></li>
                         <li><a href="#portfolio"><AiFillAppstore /></a></li>
                         <li><a href="#contact"><AiFillMessage /></a></li>
                    </ul>
                 
   
        </ScrollspyNav>
        <div >
        <div id="home">home</div>
        <div id="about">about</div>
        <div id="skills">skills</div>
        <div id="contact">portfolio</div>
        <div id="contact">contact</div>
        </div>

      </ul>
    </>
  );
};

export default FloatingNav;
