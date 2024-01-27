import React from "react";
import "./topFold.css";
import Button from "../../common/Button";

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-r-bg-blob"></div>
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell{" "}
          <span className="heading-gradient"> Extraordinary</span> NFTs
        </div>
        <div className="tf-head-short">
          <span className="heading-gradient">
            NFT Horizon:Where Art Meets Blockchain
          </span>
        </div>
        <div className="tf-description">
          Immerse yourself in a world of digital wonders with our exclusive NFT
          collections. Discover and own unique pieces of digital art, each
          authenticated and secured by blockchain technology.
        </div>

        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            customClass="tf-left-secondary-btn"
            btnType="SECONDARY"
            btnText="Create"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">423K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-image"
              src="https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-image"
              src="https://i.seadn.io/gcs/files/c3a312c53514642e8041c65e10b40a52.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-image"
              src="https://media3.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-image"
              src="https://media1.giphy.com/media/u6apJg41ba6JMjFImN/giphy.gif?cid=ecf05e47gr2mb4aycm9sq6tvrh5j5ypzhbp16tomy2agc0ix&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              alt="diamond-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
