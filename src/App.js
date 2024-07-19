import Navbar from "./component/Navbar";
import Cover from "./component/Cover";
import Skill from "./component/Skill";
import Workhistory from "./component/Workhistory";
import Certificate from "./component/Certificate";
import Contact from "./component/Contact";

import React, { useRef } from 'react';

import AllHeardSkill from "./component/AllHeardSkill";
import AllSoftSkill from "./component/AllSoftSkill";
import AllSkill from "./component/AllSkill";
import WhoAmI from "./component/WhoAmI";


function App() {

  const bottomRef = useRef(null);

  const setBottomRef = (ref) => {
    bottomRef.current = ref.current;
  };

  const handleScroll = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <Navbar handleScroll={handleScroll}/> */}
      <Cover />
      <WhoAmI/>
      <Workhistory />
      <AllSkill/>
      {/* <Skill /> */}
      <Certificate />
      <Contact/>
      
    </>
  );
}

export default App;
