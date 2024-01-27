import React from "react";
import "./infoItem.css";

const InfoItem = (props) => {
  const { item } = props;
  return (
    <div className="info-item absolute-center">
      <img src={item.icon} className="ii-icon" alt="img" />
      <div className="ii-title"><span className="heading-gradient">{item.section_title}</span></div>
      <div className="ii-description">{item.description}</div>
    </div>
  );
};

export default InfoItem;
