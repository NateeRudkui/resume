import HardSkillData from "../data/HardSkillData";

import SkillIcon from "./SkillIcon";

const AllHeardSkill = () => {
  return (
    <div className="flex flex-wrap phone:justify-center">
      {HardSkillData.map((data, index) => {
        return <SkillIcon key={index} {...data} />;
      })}
    </div>
  );
};

export default AllHeardSkill;
