import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust auto-scroll interval (in milliseconds)
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [current]);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden flex w-full h-auto">
  {/* Slides */}
  <div
    className={`flex transition ease-out duration-500`}
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >
    {slides.map((slide, index) => (
      <img
        key={index}
        src={slide}
        alt={`Slide ${index}`}
        className="w-full h-auto object-contain"
      />
    ))}
  </div>

  {/* Navigation Arrows */}
  <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-4 sm:px-2 text-3xl sm:text-xl">
    <button onClick={previousSlide}>
      <BsFillArrowLeftCircleFill />
    </button>
    <button onClick={nextSlide}>
      <BsFillArrowRightCircleFill />
    </button>
  </div>

  {/* Indicators */}
  <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
    {slides.map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrent(index)}
        className={`rounded-full cursor-pointer w-5 sm:w-3 h-1 sm:h-0.8 ${
          index === current ? "bg-white" : "bg-gray-500"
        }`}
      ></div>
    ))}
  </div>
</div>

  );
};

export default Carousel;
