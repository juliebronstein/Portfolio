import "./about.css";
import { HiDownload } from "react-icons/hi";
import pic from '../../svg/about-img.png'
import Adata from "./Adata";
import { useContext } from "react";
import { colorTemContext } from "../../context/TemColorContext";
import Card from "../../layout/Card";

const About = () => {
  const {colors} = useContext(colorTemContext);
  return (
    <>
      <section className={`${colors.backColor + "a"}`} id="about" data-aos="fade-in">
        <div className={`container about__container`}>
          <div className={` about__left`}>
            <div className={`${colors.backColor+"b"} about__portrait `}>
              <img className="col-11 d-flex" src={pic} alt="" />
            </div>
          </div>
          <div className="about__right ">
            <h2 >About me</h2>
            <div className="about__cards">
              {Adata.map((item) => (
                <Card key={item.id} className={`${colors.backColor+"b"}  about__card`}>
                  <span className={`${colors.primaryColor + "c"} about__card-icon`}>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))}
            </div>
            <p >
              Over my 2+ years in the web development industry, I have
              undertaken a diverse range of projects, spanning from small,
              simple websites to large, complex ones. I have consistently
              delivered top-notch projects within the given time frame, and this
              has fueled my motivation to take on even more challenging
              assignments.
            </p>
            <p >
            I am very punctual in project delivery and hyper-responsive. 
            I'm a skilled React and TypeScript developer with 2+ years of experience
            in building responsive, user-friendly web applications. I specialize in 
            developing reusable components and implementing efficient state management
            using Redux and Redux Toolkit. My expertise also includes using popular
            libraries like React Router Dom, Axios,Formik, Yup and Bootstrap to create dynamic
            and visually appealing interfaces. I'm committed to delivering
            high-quality code and ensuring client satisfaction. Let's work together
            to bring your ideas to life
            </p>
            <a
            className={` btn btn-primary ${colors.primaryColor}`}
              href="./JuleB.pdf"
              download
            >
              Download CV <HiDownload />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
