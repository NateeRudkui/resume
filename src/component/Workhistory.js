import "../style/Workhistory.css";

const Workhistory = () => {
  return (
    <div className="h-full bg-[#383840] text-white ">
      <div className="px-[150px] py-[150px] flex justify-center">
        <div className="grid justify-items-center w-[700px] h-auto">
          <img src="images/odde.png" className="w-[300px] h-[300px] pb-[50px]" />
          <div className="px-[30px]">
            <p className="name_copany text-[30px]">ODD-E Thailand</p>
            <p className="text-[20px]">ประสบการณ์ทำงาน 1 ปีครึ่ง</p>
            <p className="text-[20px]">
              เป็นบริษัทเกี่ยวกับการเขียนโปรแกรม ไซต์ที่ผมได้ทำงานอยู่มีชื่อว่า
              LessX เป็นไซต์ที่รับทำโปรแกรมเกี่ยวกับการเงิน มีการใช้ Agile
              เป็นระบบในการทำงานใช้หลัก TDD ในการเขียนโปรแกรม{" "}
            </p>
          </div>
        </div>
        <div className="grid justify-items-center w-[700px] h-auto">
          <img src="images/TKS.png" className="w-[300px] h-[300px] pb-[50px]" />
          <div className="px-[30px]">
            <p className="name_copany text-[30px]">TKS Softvision</p>
            <p className="text-[20px]">ประสบการณ์ทำงาน 2 ปี</p>
            <p className="text-[20px]">
              เป็นบริษัทเกี่ยวกับการจัดการการแข่งขันเทควันโด
              หน้าที่ผมคือดูแลระบบ Network
              ภายในงานการแข่งขันเนื่องจากอุปกรณ์ที่ใช้ในการจัดแข่งเป็นอุปกรณ์ไร้สายเชื่อมต่อส่วนกลาง
              รวมถึงดูแลระบบ Live สด ต่างๆ
              รวมถึงแก้ปัญหากรณีคอมพิวเตอร์หรือโปรแกรมขัดข้อง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workhistory;
