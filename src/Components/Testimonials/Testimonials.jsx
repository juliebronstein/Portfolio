import Tdata from "./Tdata";
import './Testimonial.css'
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import 'react-slick/dist/react-slick.min';
import { colorTemContext } from "../../context/TemColorContext";
import { useContext } from "react";
const Testimonials = () => {
  const {colors} = useContext(colorTemContext);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }

]

  };
  return (
    <>
      <section className={`${colors.backColor + "b"}`} id="testimonials">

 <div className="pb-5">
 <h2 className="pt-5">What Other's Say</h2>
        <p className="text_align_center">
          These are unbiased testimonials from some of the people with whom I
          have either worked or got mentorship
        </p>
        <div className="container pb-5">
        <Slider {...settings}>
          {Tdata.map((testimonial)=>(
            <div key={testimonial.id+"-"}>
            <Testimonial {...testimonial} />
            </div>
          )) }

        </Slider>
              </div>
 </div>
      </section>
    </>
  );
};

export default Testimonials;
