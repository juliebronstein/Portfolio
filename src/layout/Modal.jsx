import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { colorTemContext } from "../context/TemColorContext";
import { IoIosColorPalette } from "react-icons/io";
function MyVerticallyCenteredModal(props) {
  const {colors, setColors} = useContext(colorTemContext);

  const changeColor=(props,primaryColor)=>{
    props.onHide()
    const buf={primaryColor:primaryColor,backColor:colors.backColor}
      setColors(()=>{return {...colors,primaryColor:primaryColor}})

      
    localStorage.setItem('colors', JSON.stringify(buf));
    }

  const changeBackColor=(props,backColor)=>{
    props.onHide()
    
    setColors(()=>{return {...colors,backColor:backColor}})
    const buf={primaryColor:colors.primaryColor,backColor:backColor}
    localStorage.setItem('colors', JSON.stringify(buf));
  }
  

  return (
    <div >
      <Modal
        {...props}
        className="my-modal m justify-content-center ps-5"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
  
        <Modal.Body>
          <div className="align-content-center">
          <h3 className="justify-content-center f-s-b fs-3">
            Customize Your Theme
            <p>Change the primary and background color to your preferences.</p>
          
          </h3>  
          <p>primary Color</p>
            <div className="d-flex flex-row justify-content-center ">
            <div  className="d-flex primary-color color-1" onClick={()=>{changeColor(props,'color-1')}}></div>
            <div  className="d-flex primary-color color-2" onClick={()=>{changeColor(props,'color-2')}}></div>
            <div  className="d-flex primary-color color-3" onClick={()=>{changeColor(props,'color-3')}}></div>
            <div  className="d-flex primary-color color-4" onClick={()=>{changeColor(props,'color-4')}}></div>
            <div  className="d-flex primary-color color-5" onClick={()=>{changeColor(props,'color-5')}}></div>
            <div  className="d-flex primary-color color-6" onClick={()=>{changeColor(props,'color-6')}}></div>
            </div>
            <p>Background Color</p>
            <div className="d-flex flex-row justify-content-center">
            <div  className="d-flex back-color bg-1a" onClick={()=>{changeBackColor(props,'bg-1')}}></div>
            <div  className="d-flex back-color bg-2a" onClick={()=>{changeBackColor(props,'bg-2')}}></div></div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function ColorModal() {
  const [modalShow, setModalShow] = useState(false);
  const {colors} = useContext(colorTemContext);
  return (
    <span >
   

  <IoIosColorPalette className={`fs-2`}  onClick={() => setModalShow(true)}/>
       <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </span>
  );
}

export default ColorModal;

