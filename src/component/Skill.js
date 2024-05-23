import "boxicons";

const Skill = () => {
  return (
    <div className=" h-full flex flex-row mb-[100px] mt-[50px] text-red-800">
      <div className="basis-1/2">
        <div className="border-[10px] border-red-800 mx-[150px] pb-[140px] mt-[40px] rounded-lg">
          <div className="flex flex-row items-center justify-center  pt-[50px] pb-[20px]">
            <box-icon name="laptop" size="80px" color='#cb3030'></box-icon>
            <p className="text-center text-[4rem] ">Hard Skill</p>
          </div>
          <div className="flex flex-row items-center">
            <ul className="mx-[150px] ">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>GitHub</li>
              <li>NodeJS </li>
              <li>MongoDB</li>
            </ul>
            <ul className="mx-[150px] ">
              <li>Prisma</li>
              <li>Docker</li>
              <li>GitHub</li>
              <li>NodeJS </li>
              <li>MongoDB</li>
              <li>Prisma</li>
              <li>Docker</li>
              <li>Playwright</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="border-[10px] border-red-800 mx-[150px] pb-[60px] mt-[40px] rounded-lg">
          <div className="flex flex-row items-center justify-center pt-[50px] pb-[20px]">
            <box-icon type="solid" name="user-check" size="80px" color='#cb3030'></box-icon>
            <p className=" text-[4rem] ">Soft Skill</p>
          </div>
          <ul className="mx-[150px]">
            <li>ความฉลาดด้านอารมณ์และความเข้าอกเข้าใจผู้อื่น</li>
            <li>ทักษะการทำงานร่วมกับผู้อื่น และการทำงานเป็นทีม</li>
            <li>ทักษะการสื่อสารระหว่าบุคคล</li>
            <li>ทักษะในการปรับตัวและยืดหยุ่น</li>
            <li>
              ทักษะความฉลาดทางวัฒนธรรมและการตระหนักรู้ถึงความหลากหลายในสังคม
            </li>
            <li>ทักษะความใฝ่รู้และไม่หยุดที่จะเรียนรู้</li>
            <li>ทักษะในการยอมรับและยินดีกับการเปลี่ยนแปลง</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
