import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Sliderbar from "../apifolder/Sliderbar";
// import "./Slider.css";

const Slider = () => {
  //   var length = Sliderbar.length;
  //   console.log(length);


  const [slides] = useState(Sliderbar);
  const [activeSlide, setactiveSlide] = useState(0);

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setactiveSlide(0);
    } else {
      setactiveSlide(activeSlide + 1);
    }
  };
  const preSlide = () => {
    if (activeSlide === 0) {
      setactiveSlide(slides.length - 1);
    } else {
      setactiveSlide(activeSlide - 1);
    }
  };
  setInterval(nextSlide, 10000);
  return (
    <>
      <div className="parentDiv h-[540px] bg-white flex  items-center justify-between">
        <div className={arrowStyle}>
          <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={preSlide} />
        </div>
        {
          // eslint-disable-next-line
          slides.map((slide, index) => {
            if (index === activeSlide) {
              return (
                <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0]  overflow-hidden relative " key={index}>
                  <div className="w-full h-screen">
                    <img
                      className="top-0 left-0 w-full h-screen object-cover"
                      src={slide.src}
                      alt="/"
                    />
                    <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
                    <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <h2 className="text-[55px]">{slide.content.h2}</h2>
                      <p className="text-[30px]">{slide.content.p}</p>
                      <button className="btn btn-primary">Shop Now</button>
                    </div>
                  </div>
                </div>
              );
            }
          })
        }
        <div className={arrowStyle}>
          <ArrowRightOutlined
            style={{ fontSize: "50px" }}
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
