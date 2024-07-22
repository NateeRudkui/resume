import { useEffect, useState } from "react";
import "../style/Cover.css";

const Cover = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const toRotate = ["and I'am Front-End Developer & Tester"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <div className="uppercase flex flex-row  h-screen bg-hero-pattern bg-cover bg-center phone:text-center">
      <div className="flex  w-screen h-auto overflow-hidden">
        <div className="basis-1/2 content-center pl-[5rem] w-screen">
          <p className="text-[25px]  text-white ">Hello, My Name Is</p>
          <p className="text-[100px]  text-white phone:text-[60px]">NATEE RUDKUI</p>
          <p className="iam text-[25px]  text-white ">-{text}</p>
        </div>
        <div className="images-profile basis-1/2 content-center group">
          <img src="images/NT_space.png" className=" group-hover:hidden"></img>
          <img
            src="images/nt_space_super.png"
            className="hidden group-hover:block"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Cover;
