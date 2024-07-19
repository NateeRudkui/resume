import AllHeardSkill from "./AllHeardSkill";
import AllSoftSkill from "./AllSoftSkill";
import "../style/AllSkill.css"

const AllSkill = () => {
  return (
    <div className="allskill bg-[#F2F2F2] py-[20px]">
        <h1>My Hard Skill</h1>
      <AllHeardSkill />
      <h1>My Soft Skill</h1>
      <AllSoftSkill />
    </div>
  );
};

export default AllSkill;
