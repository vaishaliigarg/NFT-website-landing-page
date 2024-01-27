import React from "react";
import "./trendingCard.css";

const TrendingCard = (props) => {
  const { nft } = props;
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                alt={nft.user_name}
                className="tc-user-logo"
                src={nft.user_photo}
              />
              <div>
                <div className="tc-ui-username">{nft.user_name}</div>
                <div className="tc-ui-userhandle">{nft.user_handle}</div>
              </div>
              
                
             
            </div>
            <img
                  className="tc-solana-logo"
                  alt="ETH ON SOLANA"
                  src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/1659e5ab-83bd-40b9-33d4-eb3504ec2c00/thumbnail?v=2024012705"
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
