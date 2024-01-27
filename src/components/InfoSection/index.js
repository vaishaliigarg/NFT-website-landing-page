import React from "react";
import "./infoSection.css";
import InfoItem from "./InfoItem";
import { INFO_ITEMS } from "../../Data/infoItems";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="ic-inner-wrapper">
        <div className="ic-content">
          <div className="is-heading absolute-center">
            <span className="heading-gradient">Create and sell your NFTs</span>
          </div>
          <div className='is-items-container'>
            {INFO_ITEMS.map((_infoItem) => (
              <InfoItem item={_infoItem} key={_infoItem.id}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
