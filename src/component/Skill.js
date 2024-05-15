const Skill = () => {
    return <div className=" h-full bg-lime-200 flex flex-row">
      <div className="basis-1/2">
          <p className="text-center text-[4rem] pt-[50px] pb-[20px]">hard skill</p>
          <ul className="mx-[150px]">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>GitHub</li>
              <li>NodeJS </li>
              <li>MongoDB</li>
              <li>Prisma</li>
              <li>Docker</li>
          </ul>
      </div>
      <div className="basis-1/2 ">
      <p className="text-center text-[4rem] pt-[50px] pb-[20px]">soft skill</p>
      <ul className="mx-[150px]">
              <li>ความฉลาดด้านอารมณ์และความเข้าอกเข้าใจผู้อื่น</li>
              <li>ทักษะการทำงานร่วมกับผู้อื่น และการทำงานเป็นทีม</li>
              <li>ทักษะการสื่อสารระหว่าบุคคล</li>
              <li>ทักษะในการปรับตัวและยืดหยุ่น</li>
              <li>ทักษะความฉลาดทางวัฒนธรรมและการตระหนักรู้ถึงความหลากหลายในสังคม</li>
              <li>ทักษะความใฝ่รู้และไม่หยุดที่จะเรียนรู้</li>
              <li>ทักษะในการยอมรับและยินดีกับการเปลี่ยนแปลง</li>
          </ul>
          </div> 
    </div>;
  };
  
  export default Skill;
  