import React from 'react'
import bannerData from "../../assets/banner/banner";
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div className="py-5 w-full flex flex-wrap gap-5 justify-center box bannerBox overflow-hidden">
      {bannerData.imagesArray.slice(0, props.item).map((img, index) => (
        <Link to='/' key={index} className="group overflow-hidden rounded-md">
          <img
            src={img}
            alt={`Banner ${index + 1}`}
            className="w-[300px] h-[160px] rounded-md transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
}

export default BannerBox;
