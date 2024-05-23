import "boxicons";
import React, { useRef } from "react";

const Contact = ({ setRef }) => {
  const bottomRef = useRef(null);

  setRef(bottomRef);


  return (
    <div className="h-full py-5 text-white bg-red-800" ref={bottomRef}>
      <h1 className="text-center text-[3rem]">ช่องทางติดต่อ</h1>
      <div className="grid justify-items-center">
        <div className="mb-[20px]"></div>
        <div className="flex items-center py-1">
          {" "}
          <box-icon
            type="logo"
            name="facebook-square"
            size="20px"
            color="#f5eeee"
          ></box-icon>
          <a href="https://www.facebook.com/thettt.za" className="text-[20px] ">
            Tee Natee
          </a>
        </div>
        <div className="flex items-center py-1">
          {" "}
          <box-icon
            name="instagram-alt"
            type="logo"
            size="20px"
            color="#f5eeee"
          ></box-icon>
          <a href="https://www.instagram.com/tee_lst/" className="text-[20px]">
            tee_lst
          </a>
        </div>
        <div className="flex items-center py-1">
          {" "}
          <box-icon
            type="solid"
            name="envelope"
            size="20px"
            color="#f5eeee"
          ></box-icon>
          <p className="text-[20px]">NateeRudkui@outlook.com</p>
        </div>
        <div className="flex items-center py-1">
          {" "}
          <box-icon
            type="solid"
            name="phone"
            size="20px"
            color="#f5eeee"
          ></box-icon>
          <p className="text-[20px]">065-726-3296</p>
        </div>
        <div className="mb-[50px]"></div>
      </div>
    </div>
  );
};

export default Contact;
