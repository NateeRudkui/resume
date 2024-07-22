import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import "../style/Certificate.css"

const Certificate = () => {
  const slides = [
    { images: "./images/react.jpg" },
    { images: "./images/github.png" },
  ];

  const [currenIndex, setCurrenIndex] = useState(0);

  const prevSlid = () => {
    const isFirstSlide = currenIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currenIndex - 1;
    setCurrenIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currenIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currenIndex + 1;
    setCurrenIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrenIndex(slideIndex);
  };
  return (
    <div className="w-auto h-auto bg-[#BF814B]">
      <div className="w-[70%] h-[780px] w-full m-auto py-16 px-4 relative group">
        <img
          src={slides[currenIndex].images}
          className="w-full h-full m-auto rounde-2xl bg-center bg-cover duration-500"
        ></img>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white curosr-pointer">
          <box-icon
            color="#D98236"
            name="left-arrow-alt"
            size="60px"
            onClick={prevSlid}
          ></box-icon>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white curosr-pointer">
          <box-icon
            color="#D98236"
            name="right-arrow-alt"
            size="60px"
            onClick={nextSlide}
          ></box-icon>
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slides, slideIndex) => {
            return (
              <div className=""key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                {/* <RxDotFilled className=""/> */}
                <label className={`slidel ${currenIndex === slideIndex ? "bg-[#D98236]" : "bg-white"}`}></label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
