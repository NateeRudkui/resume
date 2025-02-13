import SoftSkillData from "../data/SoftSkillData";
import SkillIcon from "./SkillIcon";

const AllSoftSkill = () => {
  return (
    <div className="flex flex-wrap phone:justify-center">
      {SoftSkillData.map((data, index) => {
        return <SkillIcon key={index} {...data} />;
      })}
    </div>
  );
};

export default AllSoftSkill;
