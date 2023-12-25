
import { useContext } from "react";
import Card from "../../layout/Card";
import Sdata from "./Sdata";
import "./Skill.css";
import { colorTemContext } from "../../context/TemColorContext";

const Services = () => {
  const {colors} = useContext(colorTemContext);
  return (
    <>
      <section className={`${colors.backColor+"b"} pt-5`} id="skills">
        <h2 className="text-center pt-5" >Skills & Proficiencies</h2>
        <p className="text-center">Highlighting my abilities and expertise</p>
        <div className="container services__container col-12 col-md-9" data-aos="fade-up">
          {Sdata.map((item) => (
            <Card key={item.id} className={`${colors.backColor+"a"} d-lg-flex flex-lg-row `} >
              <div className={`${colors.primaryColor}  service__icon`}>{item.icon}</div>
              <div className="service__details">
                <h4 className=" f-s-b">{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
