import React from "react";
import Slider from "react-slick/lib/slider";
import "./trendingNfts.css";
import { TRENDING_NFTS } from "../../Data/trendingNFTs";
import Button from "../../common/Button"
import TrendingCard from "./TrendingCard";

const settings={
  slidesToShow:3,
  slidesToScroll:1,
  autoPlay:true,
  speed:500,
  arrows:false,
};
const TrendingNfts = () => {
  return (
    <div className="trending-nfts">
      <div className="tf-r-bg-blob"></div>
      <div className="tn-title absolute-center">
        <span className="heading-gradient">Trending NFTs</span>
      </div>
      <Slider {...settings}>
          {TRENDING_NFTS.map((_nft)=>
          <TrendingCard nft={_nft}/>)}
      </Slider>
      <div className="tn-btn absolute-center" >
        <div className="heading-gradient">
        <Button btnText='SEE MORE' type="Secondary" customClass="seemore-btn"/>
        </div>
      </div>
    </div>
  );
};

export default TrendingNfts;
