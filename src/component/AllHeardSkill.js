import HardSkillData from "../data/HardSkillData";

import SkillIcon from "./SkillIcon";

const AllHeardSkill = () => {
  return (
    <div className="flex">
      {HardSkillData.map((data, index) => {
        return <SkillIcon key={index} {...data} />;
      })}
    </div>
  );
};

export default AllHeardSkill;
