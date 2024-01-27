import "./brands.css";
import React from 'react'

const Brands = () => {
  return (
    <div className="brands-integration absolute-center">
      <div className="bi-inner-wrapper">
        <div className=" bi-image">
        <img src={require('../../assets/pp.png')} className="bi-logos" alt='brand-logos'/>
        </div>
      </div>
    </div>
  );
};

export default Brands