import React, { useContext, useEffect } from "react";

import ColorModal from "../../layout/Modal";
import { colorTemContext } from "../../context/TemColorContext";
import Ndata from "./Ndata";

export const Navbar = () => {
  const { colors} = useContext(colorTemContext);

  return (
    <nav
      className={`${colors.primaryColor} col-12 d-flex flex-row justify-content-around`}
    >
      <a className="text-decoration-none" href="/#">
      <div className={` name`} >
        Samane <span className={`${colors.primaryColor+"c"}`} >Azhar</span>
      </div>
      </a>
      <ul className="nav__menu d-none  d-lg-flex">
        {Ndata.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <ColorModal />
    </nav>


  );
};
