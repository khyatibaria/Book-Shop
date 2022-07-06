import { useState } from "react";
import "./Accordion.css";
//import images from "../assets";
import DownArrow from "../assets/down_arrow.svg";
const Accordion = (props) => {
  const { title, content } = props;
  //const { DownArrow } = images;
  const [open, setOpen] = useState(false);
  const openAccordionHandler = () => {
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="accordion-container">
      <div className="accordion-header">
        <div className="accordion-title">{title}</div>
        <button className="accordion-button" onClick={openAccordionHandler}>
          <img src={DownArrow} alt="down-arrow" height="15" width="40" />
        </button>
      </div>
      {open && <div className="accordion-body">{content}</div>}
    </div>
  );
};
export default Accordion;
