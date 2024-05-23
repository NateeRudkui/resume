import { Carousel } from "flowbite-react";

const Certificate = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="h-[600px] w-4/6 my-[50px] bg-red-800 p-4 rounded-lg">
        <Carousel>
          <img
            src="images/github.png"
            alt="..."
            className="w-full h-full object-contain"
          />
          <img
            src="images/react.jpg"
            alt="..."
            className="w-full h-full object-contain"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Certificate;
