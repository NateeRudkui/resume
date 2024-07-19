const SkillIcon = ({ img_icon, name_icon }) => {
  return (
    <div className="w-28 h-full mx-[1rem]">
      <img src={img_icon} className="h-28 w-28" />
      <div className="text-center text-[1rem] pt-[2px]">{name_icon}</div>
    </div>
  );
};

export default SkillIcon;
