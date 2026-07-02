import React from 'react';
import Slider from 'react-slick';
import './MapFooter.css';

const MapFooter = ({ galleryItems, featureItems }) => {

  return (
    <div className="map-container paddingleftight padding-bottom padding-top">
   <div className="flex flex-col items-center ">
         <h2 className="text-2xl uppercase font-bold text-white mt-2">Map Features</h2>
    </div>
      <div className="flex-container" valign="middle">
        {featureItems.map((item, index) => (
          <div className="box" key={index}>
            <div className="video-container">
              <div className="major-feature__item-wrap">
                <video
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  width="100%"
                  height="100%"
                  className="major-feature__video"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="content">{item.name}</div>
          </div>
        ))}
      </div>

      <Slider
        dots={false}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        swipe={false}
        rtl={false}
      >
        {galleryItems.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MapFooter;
