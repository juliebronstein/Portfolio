import React, { useContext, useState } from "react";
import Card from "../../layout/Card";
import './Testimonial.css'
import { colorTemContext } from "../../context/TemColorContext";

const Testimonial = ({ avatar, quote, name, profession }) => {
  const { colors} = useContext(colorTemContext);
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className={`light ${colors.backColor+"a"} m-3`}>
      <p className="testimonial__quote">
        {readMore ? quote : `${quote.substring(0, 100)}...`}
        <br />
        <button className={`read_btn ${colors.primaryColor+"c"}`} onClick={() => setReadMore(!readMore)}>
          {readMore ? "show more" : "show less"}
        </button>
      </p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img className="col-12" src={avatar} alt="" />
        </div>
        <div className="testimonial__client-details">
          <h6 className="f-s-b ">{name}</h6>
          <small className="f-s-1" >{profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
