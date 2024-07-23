import AllHeardSkill from "./AllHeardSkill";
import AllSoftSkill from "./AllSoftSkill";
import "../style/AllSkill.css";

const AllSkill = () => {
  return (
    <div className="allskill uppercase bg-[#F2F2F2] py-[20px] phone:text-center">
      <h1 className="skill-titel">My Hard Skill</h1>
      <AllHeardSkill />
      <h1 className="skill-titel">My Soft Skill</h1>
      <AllSoftSkill />
    </div>
  );
};

export default AllSkill;
